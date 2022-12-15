import { AddSet } from "@pages/stock/addSet/addDress/AddSet"
import { Route, Routes } from "react-router-dom"

export const CollectionRouter = () => {
    return (
        <Routes>
                <Route path="newset" element={<AddSet />} ></Route>
        </Routes>)
}