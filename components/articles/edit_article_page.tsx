"use client"
import React, { FormEvent, startTransition, useActionState, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import type { Articles } from '@prisma/client';
import { editArticle } from '@/actions/edit_article';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

type EditArticleProps = {
    article: Articles
}

const EditArticlesPage: React.FC<EditArticleProps> = ({ article }) => {
    const [content, setContent] = useState(article.content)
    const [formState, action, isPending] = useActionState(editArticle.bind(null, article.id), {
        errors: {},
    });

    console.log("formstate", formState);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        formData.append("content", content)

        startTransition(() => {
            action(formData);
        })
    }
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Create New Article</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Article Title</Label>
                            <Input
                                id="title"
                                name="title"
                                defaultValue={article.title}
                                placeholder="Enter article title"
                            />

                            {formState.errors.title && <span className='text-red-600 text-sm'>{formState.errors.title}</span>}

                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <select
                                id="category"
                                name="category"
                                defaultValue={article.category}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <option value="">Select Category</option>
                                <option value="technology">Technology</option>
                                <option value="programming">Programming</option>
                                <option value="web-development">Web Development</option>
                            </select>
                            {formState.errors.category && <span className='text-red-600 text-sm'>{formState.errors.category}</span>}


                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="featuredImage">Featured Image</Label>
                            <Input
                                id="featuredImage"
                                name="featuredImage"
                                type="file"
                                accept="image/*"
                            />
                            <div className='mb-4'>
                                {
                                    article.featureImage && (
                                        <img
                                            src={article.featureImage}
                                            alt='featured-image'
                                            className='w-40 h-24 object-cover rounded-md'

                                        />
                                    )
                                }
                            </div>

                        </div>

                        <div className="space-y-2">
                            <Label>Content</Label>
                            <ReactQuill
                                theme='snow'
                                value={content}
                                onChange={setContent}
                            />
                            {/* {formState.errors.content && <span className='text-red-600 text-sm'>{formState.errors.content[0]}</span>} */}

                            {formState.errors.content && (
                                <span className="font-medium text-sm text-red-500">
                                    {formState.errors.content[0]}
                                </span>
                            )}

                        </div>

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isPending}>
                                {
                                    isPending ? "Loading..." : " Edit Article"
                                }
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default EditArticlesPage;
