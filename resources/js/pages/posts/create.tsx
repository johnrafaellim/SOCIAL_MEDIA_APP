import React from "react";
import AppLayout from "../../layouts/app-layout";
import { Form } from "@inertiajs/react";
import { cn } from "../../lib/utils";

const PostsCreate = () => {
    return (
        <AppLayout>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Create Post
            </h1>
            <Form action="/posts" method="post" className="space-y-4">
                {({ errors }) => (
                    <>
                        <div>
                            <label
                                htmlFor="title"
                                className={cn(
                                    "block mb-1",
                                    errors.title && "text-red-500",
                                )}
                            >
                                Title
                            </label>
                            <input
                                id="title"
                                className={cn(
                                    "w-full border rounded px-3 py-2",
                                    errors.title && "border-red-500",
                                )}
                                name="title"
                                type="text"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.title}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="body"
                                className={cn(
                                    "block mb-1",
                                    errors.body && "text-red-500",
                                )}
                            >
                                Body
                            </label>
                            <textarea
                                id="body"
                                className={cn(
                                    "w-full border rounded px-3 py-2",
                                    errors.body && "border-red-500",
                                )}
                                name="body"
                            />
                            {errors.body && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.body}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Create
                        </button>
                    </>
                )}
            </Form>
        </AppLayout>
    );
};

export default PostsCreate;
