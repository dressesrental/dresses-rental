import { Route, Routes } from "react-router-dom"
import { MenuRouter } from "./menu.router"

export const AppRouter = () => {
    return (
        <div>
            {/*
            * useSearchParams , 
            * <Outlet contex={} >,  extra contex
            * <Link > opthion: replace (for login exmpole) & to & state, 
            * <NavLink > - have also style opthion: children, class active , style
            * <Navigate to={""}/> redirect automatically   
            * use navigate(-1) - back on page
            * useLocation option:  hash: all in searchLine that began with #, pathname, sertch (like: ?id=5), state, */}
            <Routes>
                <Route path="/*" element={<MenuRouter />} />
            </Routes>
        </div>
    )
}

