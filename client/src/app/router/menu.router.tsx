import { Menu } from "@components"
import { Route, Routes } from "react-router-dom"
import { Register, Login } from "@pages/conected"
import { Home } from "@pages/home"
import { OrdersRouter } from "./orders.router"
import { UsersRouter } from "./users.roter"
import { NotFound } from "@pages/index"
import { CollectionRouter } from "./collection.router"

export const MenuRouter = () => {
    return (
        <Routes >
            <Route element={<Menu />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="orders/*" element={<OrdersRouter />} />
                <Route path="users/*" element={<UsersRouter />} />
                <Route path="collections/*" element={<CollectionRouter />} />
            </Route>
        </Routes>
    )
}