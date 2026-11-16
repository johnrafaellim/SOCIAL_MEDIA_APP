import { Link } from "@inertiajs/react";
import type { ComponentProps, ReactNode } from "react";

interface AppHeaderLinkProps {
    href: ComponentProps<typeof Link>["href"];
    children: ReactNode;
}

const AppHeaderLink = ({ href, children }: AppHeaderLinkProps) => {
    return (
        <Link href={href} className="text-gray-600 font-medium">
            {children}
        </Link>
    );
};

export default AppHeaderLink;
