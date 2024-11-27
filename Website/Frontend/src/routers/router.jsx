import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UploadFiles from "../pages/UploadFiles";
import History from "../pages/History";
import Buy from "../pages/Buy";
import Login from "../pages/Login/Login";
import LoginUser from "../pages/Login/LoginUser";
import LoginAdmin from "../pages/Login/LoginAdmin";
import Dashboard from "../pages/Dashboard";
import Preview from "../pages/Preview";
import Success from "../pages/Success";
import { ProtectedRoute } from './../pages/ProtectedRoutes';

const router = createBrowserRouter([
    {
        path: "/",
<<<<<<< HEAD
        element: <Home />,
      },
      {
        path: "/print",
        element: <UploadFiles />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login-user",
    element: <LoginUser />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
=======
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
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
        element: <Login /> // sửa thành Signup sau
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "/login-user",
        element: <LoginUser />,
    },
>>>>>>> 60a347803bbb822ea0a0816f6a482884fcb33dd8
]);

export default router;
