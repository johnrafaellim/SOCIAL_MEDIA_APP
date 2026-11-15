import React from "react";
import AppLayout from "../../layouts/app-layout";
import { Post } from "../../types/index";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import CommentForm from "../..//components/comment-form";

interface PostsShowProps {
    post: Post;
}

const PostsShow = ({ post }: PostsShowProps) => {
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
                <CommentForm postId={post.id} />

                {/* Comments Section */}
            </div>
        </AppLayout>
    );
};

export default PostsShow;
