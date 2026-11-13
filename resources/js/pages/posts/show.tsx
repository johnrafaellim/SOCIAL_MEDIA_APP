import React from "react";
import AppLayout from "../../layouts/app-layout";
import { Post } from "resources/js/types";

interface PostsShowProps {
    post: Post;
}

const PostsShow = ({ post }: PostsShowProps) => {
    return (
        <AppLayout>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </AppLayout>
    );
};

export default PostsShow;
