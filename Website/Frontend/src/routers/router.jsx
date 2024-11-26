import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UploadFiles from "../pages/UploadFiles";
import History from "../pages/History";
import Buy from "../pages/Buy";
import Login from "../pages/Login/Login";
import LoginUser from "../pages/Login/LoginUser";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
]);

export default router;
