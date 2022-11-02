import { ShowDresses } from "@components"
import { Outlet } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            home
            <ShowDresses />
        </div>
    )
}