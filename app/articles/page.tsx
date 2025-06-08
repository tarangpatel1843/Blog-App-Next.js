import AllArticlePage from '@/components/articles/all_article_page'
import ArticleSearchInput from '@/components/articles/article_search_input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchArticleByQuery } from '@/lib/query/fetch_article_by_query'
import Link from 'next/link'
import React, { Suspense } from 'react'

type SearchPageProps = {
    searchParams: Promise<{ search?: string; page?: string }>
}


const ITEMS_PER_PAGE = 3;



const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
    const searchText = (await searchParams).search || "";
    // const currentPage = Number((await searchParams).page) || 1;
    const rawPage = Number((await searchParams).page) || 1;
    const currentPage = rawPage < 1 ? 1 : rawPage;

    const skip = (currentPage - 1) * ITEMS_PER_PAGE;
    // const skip = (currentPage - 1) * ITEMS_PER_PAGE;
    const take = ITEMS_PER_PAGE;

    const { articles, total } = await fetchArticleByQuery(searchText, skip, take)

    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-12 space-y-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        All Articles
                    </h1>
                    {/* Search Bar */}
                    <ArticleSearchInput />
                </div>
                {/* All article page  */}


                {/* All Article Card */}
                <Suspense fallback={<AllArticlesPageSkeleton />}>
                    <AllArticlePage articles={articles} />
                </Suspense>

                {/* pagination */}

                <div className="mt-12 flex justify-center gap-2">
                    <Link href={`?search=${searchText}&page=${currentPage - 1}`} passHref>
                        <Button disabled={currentPage === 1} variant="ghost" size="sm" > ← Prev</Button>
                    </Link >
                    {
                        // Array.from({ length: totalPages }).map((_, index) => (
                        //     <Link key={index} href={`?search=${searchText}&page=${index - 1}`} passHref>
                        //         <Button
                        //             variant={`${currentPage === index + 1 ? 'destructive' : 'ghost'}`}
                        //             size="sm">
                        //             {index + 1}
                        //         </Button>
                        //     </Link>
                        // ))
                        Array.from({ length: totalPages }).map((_, index) => (
                            <Link key={index} href={`?search=${searchText}&page=${index + 1}`} passHref>
                                <Button variant={currentPage === index + 1 ? 'destructive' : 'ghost'} size="sm">
                                    {index + 1}
                                </Button>
                            </Link>
                        ))

                    }

                    <Link href={`?search=${searchText}&page=${currentPage + 1}`} passHref>
                        <Button disabled={currentPage === totalPages} variant="ghost" size="sm" >  Next →</Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default page


export function AllArticlesPageSkeleton() {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card
                        key={index}
                        className="group relative overflow-hidden transition-all hover:shadow-lg"
                    >
                        <div className="p-6">
                            {/* Image Skeleton */}
                            <Skeleton className="mb-4 h-48 w-full rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20" />

                            {/* Title Skeleton */}
                            <Skeleton className="h-6 w-3/4 rounded-lg bg-muted" />

                            {/* Category Skeleton */}
                            <Skeleton className="mt-2 h-4 w-1/2 rounded-lg bg-muted" />

                            {/* Author & Metadata Skeleton */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-8 w-8 rounded-full bg-muted" />
                                    <Skeleton className="h-4 w-20 rounded-lg bg-muted" />
                                </div>
                                <Skeleton className="h-4 w-24 rounded-lg bg-muted" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>

    );
}