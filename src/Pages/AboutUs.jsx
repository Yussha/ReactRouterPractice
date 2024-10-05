import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
    const [user, setUser] = useState('mario')

    if (!user) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div className="p-4">
            <h2>About us</h2>
            <div className="flex flex-col gap-8">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi eveniet earum. Dolorem, vel? Explicabo veniam, id, laudantium sunt amet pariatur unde porro architecto ims sequi maiores illo enim fugiat. Maxime, nam quam animi a, reiciendis atque similique voluptates aliquid, ratione enim sequi voluptas dignissimos exercitationem ducimus vero. Nobis facilis corporis, neque consequatur ipsum natus cum vero, eligendi deserunt optio nesciunt laudantium, in reprehenderit unde magnam. Possimus alias recusandae et soluta numquam vel.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi eveniet earum. Dolorem, vel? Explicabo veniam, id, laudantium sunt amet pariatur unde porro architecto ims sequi maiores illo enim fugiat. Maxime, nam quam animi a, reiciendis atque similique voluptates aliquid, ratione enim sequi voluptas dignissimos exercitationem ducimus vero. Nobis facilis corporis, neque consequatur ipsum natus cum vero, eligendi deserunt optio nesciunt laudantium, in reprehenderit unde magnam. Possimus alias recusandae et soluta numquam vel.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi eveniet earum. Dolorem, vel? Explicabo veniam, id, laudantium sunt amet pariatur unde porro architecto ims sequi maiores illo enim fugiat. Maxime, nam quam animi a, reiciendis atque similique voluptates aliquid, ratione enim sequi voluptas dignissimos exercitationem ducimus vero. Nobis facilis corporis, neque consequatur ipsum natus cum vero, eligendi deserunt optio nesciunt laudantium, in reprehenderit unde magnam. Possimus alias recusandae et soluta numquam vel.
                </p>
            </div>


            <button onClick={() => setUser(null)} className="bg-orange-400 p-2">Logout</button>
        </div>
    )
}