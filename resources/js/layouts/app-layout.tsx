import { ReactNode } from "react";
import Appheader from "../components/app-header";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Appheader />
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
