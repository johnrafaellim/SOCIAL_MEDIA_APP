import React, { useEffect, useRef } from "react";
import AppLayout from "../../layouts/app-layout";
import { Post, Comment } from "../../types/index";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import CommentForm from "../../components/comment-form";
import CommentCard from "../../components/comment-card";
import { Deferred, usePoll } from "@inertiajs/react";
import { toast } from "sonner";
import CommentList from "../../components/comment-list";

interface PostsShowProps {
    post: Post;
    comments: Comment[];
}

const PostsShow = ({ post, comments }: PostsShowProps) => {
    const commentsSectionRef = useRef<HTMLDivElement>(null);
    const commentCountRef = useRef(comments?.length ?? 0);
    const isWritingComment = useRef(false);

    const scrollToComments = () =>
        commentsSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

    usePoll(3_000, {
        only: ["comments"],
    });

    useEffect(() => {
        // Current length of comments = []
        const newCommentCount = comments?.length ?? 0;
        // We have stored the previous length
        // We compare them and show toast if different
        if (
            newCommentCount > commentCountRef.current &&
            commentCountRef.current > 0 &&
            !isWritingComment.current
        ) {
            toast("New comments available", {
                duration: 6_000,
                action: {
                    label: "View Comments",
                    onClick: scrollToComments,
                },
            });
        }
        // And we update the previous length = current length
        commentCountRef.current = newCommentCount;
        isWritingComment.current = false;
    }, [comments]);

    const handleCommentAdded = () => {
        isWritingComment.current = true;
        toast("Comment has been added", {
            description: "Your comment is already live and visible",
        });
    };

    return (
        <AppLayout>
            <div className="space-y-6">
                {/* Post Content */}
                <Card className="rounded-none">
                    <CardHeader>
                        <CardTitle className="text-2xl">{post.title}</CardTitle>
                        <CardDescription>
                            By {post?.user?.name} on{" "}
                            {new Date(post.created_at).toLocaleDateString()}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {post.body}
                        </p>
                    </CardContent>
                </Card>

                {/* Comment Form */}
                <CommentForm
                    postId={post.id}
                    onCommentAdded={handleCommentAdded}
                />

                {/* Comments Section */}
                <div ref={commentsSectionRef}>
                    <Deferred
                        data="comments"
                        fallback={<CommentList comments={comments ?? []} />}
                    >
                        <CommentList comments={comments ?? []} />
                    </Deferred>
                </div>
            </div>
        </AppLayout>
    );
};

export default PostsShow;
