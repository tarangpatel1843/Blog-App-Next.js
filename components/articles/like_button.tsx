"use client"
import React, { useOptimistic, useTransition } from 'react'
import { Button } from '../ui/button'
import { Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { boolean } from 'zod';
import { Like } from '@prisma/client';
import { LikeDislikeToggle } from '@/actions/like_dislike';

type LikeButtonProps = {
    articleId: string;
    likes: Like[];
    isLiked: boolean;

};

const LikeButton: React.FC<LikeButtonProps> = ({
    articleId,
    likes,
    isLiked,

}) => {
    const [optimisticLike, setOptimisticLike] = useOptimistic(likes.length);
    const [isPending, startTransition] = useTransition();

    const handleLikeDislike = async () => {
        startTransition(async () => {
            setOptimisticLike(isLiked ? optimisticLike - 1 : optimisticLike + 1); //optimistic UI update
            await LikeDislikeToggle(articleId)
        })
    }
    return (
        <div className="flex gap-4 mb-12 border-t pt-8">
            <form action={handleLikeDislike}>
                <Button
                    type="submit"
                    variant={"ghost"}
                    className="gap-2"
                // onClick={handleLike}
                disabled={isPending}
                >
                    <ThumbsUp className="h-5 w-5" />
                    {optimisticLike}
                </Button>
            </form>
            <Button variant="ghost" className="gap-2">
                <Bookmark className="h-5 w-5" /> Save
            </Button>
            <Button variant="ghost" className="gap-2">
                <Share2 className="h-5 w-5" /> Share
            </Button>
        </div>
    )
}

export default LikeButton
