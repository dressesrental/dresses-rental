import { AddOrder, EditOrder } from "@pages/orders"
import { Route, Routes } from "react-router-dom"

export const OrdersRouter = () => {
    return (
        <Routes>
             <Route path="new" element={<AddOrder />} />
            <Route path="edit" element={<EditOrder />} />
        </Routes>
    )
}