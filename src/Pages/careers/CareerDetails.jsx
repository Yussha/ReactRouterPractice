import { useLoaderData } from "react-router-dom"

export default function CareerDetails() {
    const career = useLoaderData();
    return (
        <div>
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sapiente magnam ea architecto ab necessitatibus eaque libero numquam labore? Quasi ex cumque assumenda voluptatibus fugit odio alias iure in quibusdam!
                </p>
            </div>
        </div>
    )
}

//loaders
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:5000/careers/' + id)

    if (!res.ok) {
        throw Error('Could not find job career details');
    }

    return res.json()

}
