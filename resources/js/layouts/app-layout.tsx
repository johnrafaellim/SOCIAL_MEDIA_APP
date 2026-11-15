import { ReactNode } from "react";
import Appheader from "../components/app-header";
import { Toaster } from "../components/ui/sonner";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Appheader />
            <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
            <Toaster />
        </div>
    );
};

export default AppLayout;
