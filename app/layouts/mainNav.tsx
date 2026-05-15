import { Outlet } from "react-router";

export default function MainNav(){
    return (
        <section className="flex h-screen w-full">
            <nav className="w-1/12 p-4">
                <ul className="flex flex-col gap-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </section>
    )
}