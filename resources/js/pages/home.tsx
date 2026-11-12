import { Link } from "@inertiajs/react";
import AppLayout from "../layouts/app-layout";

const Home = () => {
    return (
        <AppLayout>
            <div>Home</div>
            <div>Welcome to homepage</div>
            <Link href="/about">About</Link>
        </AppLayout>
    );
};

export default Home;
