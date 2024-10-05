import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink = + `${crumb}`

            return (
                <div key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="flex gap-2 underline">
            {crumbs}
        </div>
    )
}

// json - server - p 5000 - w./ data / db.json