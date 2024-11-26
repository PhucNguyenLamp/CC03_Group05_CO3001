import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UploadFiles from "../pages/UploadFiles";
import History from "../pages/History";
import Buy from "../pages/Buy";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Preview from "../pages/Preview";
import Success from "../pages/Success";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/print',
                element: <UploadFiles />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/buy',
                element: <Buy />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/Preview',
                element: <Preview />
            },
            {
                path: '/success',
                element: <Success />
            }
        ]
    },
    {
        path: '/signup',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;