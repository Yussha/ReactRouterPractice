import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="mt-4 w-fit">
            {careers.length ? (
                careers.map((career) => (
                    <Link to={career.id.toString()} key={career.id} className="flex gap-2 mb-4">
                        <p>{career.title}</p>
                        <p>Based in {career.location}</p>
                    </Link>
                ))
            ) : (
                <div>No careers available</div>
            )}
        </div>
    )
}

//loaders
export const careersLoader = async () => {
    try {
        const res = await fetch('http://localhost:5000/careers')

        if (!res.ok) {
            throw Error('Could not fetch job career');
        }

        return res.json()
    } catch (err) { return [] }
}