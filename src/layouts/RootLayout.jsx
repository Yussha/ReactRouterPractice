import { Link, NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
    const navLinks = [
        {
            path: "/",
            linkName: "Home",
        },
        {
            path: "about",
            linkName: "About",
        },
        {
            path: "help",
            linkName: "Help",
        },
        {
            path: "careers",
            linkName: "Careers",
        }
    ]
    return (
        <div>
            <header className="bg-blue-500 p-4">
                <nav className="flex justify-between">
                    <h1 className="font-bold">React Router</h1>
                    <ul className="flex gap-2">
                        {navLinks.map(navLink => (
                            <li key={navLink.path} className="font-bold">
                                <NavLink to={navLink.path} className={({ isActive }) => isActive ? "text-orange-600" : ""}>{navLink.linkName}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Breadcrumbs />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}