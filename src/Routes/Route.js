import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Layout from "../Main/Layout";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default route;