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
import { InputError } from "./input-error";
import { store } from "@/actions/App/Http/Controllers/CommentController";

interface CommentFormProps {
    postId: number;
    onCommentAdded?: () => void;
}

const CommentForm = ({ postId, onCommentAdded }: CommentFormProps) => {
    return (
        <Card className="rounded-none">
            <CardHeader>
                <CardTitle>Add Comment</CardTitle>
                <CardDescription>
                    Share your thoughts about this post
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form
                    action={store()}
                    // action="/comments"
                    // method="post"
                    className="space-y-4"
                    resetOnSuccess
                    onStart={() => onCommentAdded?.()}
                    options={{
                        only: ["comments"],
                    }}
                >
                    {({ errors, processing }) => (
                        <>
                            <Input
                                type="hidden"
                                name="post_id"
                                value={postId}
                            />
                            <div className="space-y-1">
                                <Textarea
                                    id="body"
                                    name="body"
                                    placeholder="Write your comment here..."
                                    aria-invalid={!!errors.body}
                                />
                                <InputError message={errors.body} />
                            </div>
                            <Button type="submit" disabled={processing}>
                                {processing
                                    ? "Adding Comment..."
                                    : "Add Comment"}
                            </Button>
                        </>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
};

export default CommentForm;
