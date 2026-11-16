import React from "react";
import AppLayout from "../../layouts/app-layout";
import { Form } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { InputError } from "../../components/input-error";
import { store } from "@/actions/App/Http/Controllers/PostController";

const PostsCreate = () => {
    return (
        <AppLayout>
            <Card>
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Create a new post</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form
                        action={store()}
                        // action="/posts"
                        // method="post"
                        className="space-y-4"
                    >
                        {({ errors }) => (
                            <>
                                <div className="space-y-1">
                                    <Label htmlFor="title" className="mb-1">
                                        Title
                                    </Label>
                                    <Input
                                        id="title"
                                        aria-invalid={!!errors.title}
                                        name="title"
                                        type="text"
                                    />
                                    <InputError message={errors.title} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="body">Body</Label>
                                    <Textarea
                                        id="body"
                                        aria-invalid={!!errors.title}
                                        name="body"
                                    />
                                    <InputError message={errors.body} />
                                </div>
                                <Button type="submit">Create</Button>
                            </>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </AppLayout>
    );
};

export default PostsCreate;
