import React from "react";
import AppLayout from "../../layouts/app-layout";
import { Form } from "@inertiajs/react";
import { cn } from "../../lib/utils";
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

const PostsCreate = () => {
    return (
        <AppLayout>
            <Card>
                <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Create a new post</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form action="/posts" method="post" className="space-y-4">
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
                                    {errors.title && (
                                        <p className="text-red-500 text-sm">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="body">Body</Label>
                                    <Textarea
                                        id="body"
                                        aria-invalid={!!errors.title}
                                        name="body"
                                    />
                                    {errors.body && (
                                        <p className="text-red-500 text-sm">
                                            {errors.body}
                                        </p>
                                    )}
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
