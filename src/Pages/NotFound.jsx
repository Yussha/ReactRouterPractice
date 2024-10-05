import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis sunt error animi et vitae, eos laudantium. Ea facilis adipisci aut molestiae beatae temporibus ut! Quod neque consequuntur placeat ratione.</p>

            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}