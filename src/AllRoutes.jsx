import Home from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"

export const AllRoutes = () => {

    const routes = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/projects",
            element: <>Project</>
        },
        {
            path: "/contact",
            element: <>contact</>
        },
        {
            path: "*",
            element: <>Error 404 || Page not found</>
        },
    ];

    
    return (
        <Routes>
            {routes.map((route) => {
                return <Route key={route.path} path={route.path} element={route.element} />

            })}
        </Routes>
    )
}