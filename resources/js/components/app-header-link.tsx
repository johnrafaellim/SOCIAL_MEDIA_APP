import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

interface AppHeaderLinkProps {
    href: string;
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
