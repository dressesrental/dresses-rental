import { Route, Routes } from "react-router-dom"
import { TopNavRouter } from "./topNav.router"

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<TopNavRouter />} />
            </Routes>
        </div>
    )
}

