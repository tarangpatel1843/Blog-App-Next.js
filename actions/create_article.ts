"use server";

import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const createArticleSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10).refine(val => {
    const text = val.replace(/<(.|\n)*?>/g, '').trim();
    return text.length >= 10;
  }, {
    message: "Content must include at least 10 characters of text."
  }),
});

type CreateArticleFormState = {
  errors?: {
    title?: string[];
    category?: string[];
    featuredImage?: string[];
    content?: string[];
    formErrors?: string[];
  };
  success?: boolean;
};

export const createArticles = async (
  prevState: CreateArticleFormState,
  formData: FormData
): Promise<CreateArticleFormState> => {

  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    };
  }

  const { userId } = await auth();
  if (!userId) {
    return {
      errors: { formErrors: ['You have to login first'] }
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: { clearkUserId: userId }
  });

  if (!existingUser) {
    return {
      errors: { formErrors: ['User not found. Please register first.'] }
    };
  }

  const imageFile = formData.get('featuredImage') as File | null;
  if (!imageFile || imageFile.name === "undefined") {
    return {
      errors: { featuredImage: ['Image file is required'] }
    };
  }

  const arrayBuffer = await imageFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadResponse: UploadApiResponse | undefined = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });

  const imageUrl = uploadResponse?.secure_url;
  if (!imageUrl) {
    return {
      errors: { featuredImage: ['Failed to upload image. Try again.'] }
    };
  }

  try {
    await prisma.articles.create({
      data: {
        title: result.data.title,
        category: result.data.category,
        content: result.data.content,
        featureImage: imageUrl,
        authorId: existingUser.id
      }
    });
  } catch (error: any) {
    return {
      errors: { formErrors: [error?.message || 'Internal server error'] }
    };
  }

  revalidatePath("/dashboard");

  return { success: true };
};

