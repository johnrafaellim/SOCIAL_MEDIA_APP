import { Link, usePage } from "@inertiajs/react";
import AppHeaderLink from "./app-header-link";
import AppHeaderLogo from "./app-header-logo";
import { Button } from "./ui/button";
import { create, index } from "@/actions/App/Http/Controllers/PostController";
import home from "@/routes/home";
import about from "@/routes/about";
import { PageProps } from "@/types";
import { create as loginPage } from "@/actions/App/Http/Controllers/Auth/LoginController";
import UserDropdown from "./user-dropdown";
import { buttonVariants } from "@/components/ui/button";

export default function AppHeader() {
    const { auth } = usePage<PageProps>().props;
    console.log("auth", auth);
    return (
        <header>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />
                    <div className="flex space-x-6 items-center">
                        {auth?.user && (
                            <Button>
                                <Link href={create()}>Add Post</Link>
                            </Button>
                        )}
                        <AppHeaderLink href={home.index().url}>
                            Home
                        </AppHeaderLink>
                        <AppHeaderLink href={about.index().url}>
                            About
                        </AppHeaderLink>
                        <AppHeaderLink href={index().url}>Posts</AppHeaderLink>

                        <div>
                            {auth.user ? (
                                <UserDropdown />
                            ) : (
                                <Link
                                    href={loginPage().url}
                                    className={buttonVariants()}
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
