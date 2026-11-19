import { InputError } from "@/components/input-error";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Form, Link } from "@inertiajs/react";
import { Input } from "./ui/input";
import { store } from "@/actions/App/Http/Controllers/CommentController";
import { create as loginPage } from "@/actions/App/Http/Controllers/Auth/LoginController";
import { buttonVariants } from "@/components/ui/button";

interface CommentFormProps {
    postId: number;
    isAuthenticated: boolean;
    onCommentAdded?: () => void;
}

export default function CommentForm({
    postId,
    isAuthenticated,
    onCommentAdded,
}: CommentFormProps) {
    return (
        <Card className="rounded-none">
            <CardHeader>
                <CardTitle>Add Comment</CardTitle>
                <CardDescription>
                    Share your thoughts about this post
                </CardDescription>
            </CardHeader>

            <CardContent>
                {!isAuthenticated ? (
                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                            You need to log in to leave a comment.
                        </p>

                        <Link
                            href={loginPage().url}
                            className={buttonVariants()}
                        >
                            Add Comment
                        </Link>
                    </div>
                ) : (
                    <Form
                        action={store()}
                        className="space-y-4"
                        resetOnSuccess
                        onSuccess={() => {
                            onCommentAdded?.();
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
                )}
            </CardContent>
        </Card>
    );
}
