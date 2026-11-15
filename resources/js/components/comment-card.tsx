import React from "react";
import { Comment } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

interface CommentCardProps {
    comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
    return (
        <Card className="rounded-none border-b-0 last:border-b">
            <CardHeader>
                <CardTitle className="text-base">
                    {comment.user?.name}
                </CardTitle>
                <CardDescription>
                    {new Date(comment.created_at).toLocaleDateString()}
                </CardDescription>
            </CardHeader>
            <CardContent>{comment.body}</CardContent>
        </Card>
    );
};

export default CommentCard;
