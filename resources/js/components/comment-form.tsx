import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Form } from "@inertiajs/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface CommentFormProps {
    postId: number;
}

const CommentForm = ({ postId }: CommentFormProps) => {
    return (
        <Card className="rounded-none">
            <CardHeader>
                <CardTitle>Add Comment</CardTitle>
                <CardDescription>
                    Share your thoughts about this post
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form action="/comments" method="post" className="space-y-4">
                    {({ errors }) => (
                        <>
                            <Input
                                type="hidden"
                                name="post_id"
                                value={postId}
                            ></Input>
                            <div className="space-y-1">
                                <Textarea
                                    id="body"
                                    name="body"
                                    placeholder="Write your comment here..."
                                    aria-invalid={!!errors.body}
                                />
                            </div>
                            <Button>Add Comment</Button>
                        </>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
};

export default CommentForm;
