import React from "react";
import AppHeaderLogo from "./app-header-logo";
import AppHeaderLink from "./app-header-link";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { index, create } from "@/actions/App/Http/Controllers/PostController";
import home from "../routes/home";
import about from "../routes/about";

const Appheader = () => {
    return (
        <header>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />
                    <div className="flex items-center space-x-6">
                        <Button className="p-4">
                            <Link href={create()}>Add Post</Link>
                            {/* <Link href="posts/create">Add Post</Link> */}
                        </Button>
                        <AppHeaderLink href={home.index()}>Home</AppHeaderLink>
                        <AppHeaderLink href={about.index()}>
                            About
                        </AppHeaderLink>
                        <AppHeaderLink href={index()}>Posts</AppHeaderLink>
                        {/* <AppHeaderLink href="/posts">Posts</AppHeaderLink> */}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Appheader;
