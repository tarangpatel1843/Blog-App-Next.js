import EditArticlePage from '@/components/articles/edit_article_page';
import { prisma } from '@/lib/prisma';
import React from 'react';

type EditArticleParams = {
  params: Promise<{ id: string }>;
};
const page: React.FC<EditArticleParams> = async ({ params }) => {
  const id = ( await params ).id;
  const article = await prisma.articles.findUnique({
    where: { id }
  })
  if (!article) return <h1>Article Not Found for this {id}</h1>
  return (
    <div>
      <EditArticlePage article={article} />
    </div>
  );
}

export default page;
