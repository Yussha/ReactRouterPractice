import { Outlet } from "react-router-dom";

export default function CareersLayout() {
    return (
        <div className="p-4">
            <h2>Careers</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <Outlet />
        </div>
    )
}