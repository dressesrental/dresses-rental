import { AddUser, EditUser } from "@pages/users"
import { Route, Routes } from "react-router-dom"

export const UsersRouter = () => {
    return (
        <Routes>
            <Route path="new" element={<AddUser />}></Route>
            <Route path="edit" element={<EditUser />}></Route>
        </Routes>

    )
}