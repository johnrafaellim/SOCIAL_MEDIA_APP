import { Link } from "@inertiajs/react";
import AppLayout from "../layouts/app-layout";

const About = () => {
    return (
        <AppLayout>
            <div>About</div>
            <div>Welcome to about page</div>
            <Link href="/">Home</Link>
        </AppLayout>
    );
};

export default About;
