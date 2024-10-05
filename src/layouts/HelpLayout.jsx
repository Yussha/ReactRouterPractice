import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="p-4">
            <h2 className="font-bold">Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ad.</p>

            <nav className="flex gap-4 mt-4 mb-4 font-bold">
                <NavLink to="faq" className={({ isActive }) => isActive ? "text-orange-600" : ""}>View the FAQ</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? "text-orange-600" : ""}>Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}