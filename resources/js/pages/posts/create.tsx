import React from "react";
import AppLayout from "../../layouts/app-layout";
import { Form } from "@inertiajs/react";

const PostsCreate = () => {
    return (
        <AppLayout>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Create Post
            </h1>
            <Form action="/posts" method="post" className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-1">
                        Title
                    </label>
                    <input
                        id="title"
                        className="w-full border rounded px-3 py-2"
                        name="title"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body" className="block mb-1">
                        Body
                    </label>
                    <textarea
                        id="body"
                        className="w-full border rounded px-3 py-2"
                        name="body"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Create
                </button>
            </Form>
        </AppLayout>
    );
};

export default PostsCreate;
