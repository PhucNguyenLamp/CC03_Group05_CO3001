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
import { ProtectedRoute } from "./../pages/ProtectedRoutes";
import BuySuccess from "../pages/BuySuccess";
import ManagePrinter from "../pages/ManagePrinter";
import Logs from "../pages/Logs";
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
      {
        path: "/Preview",
        element: <Preview />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/buysuccess",
        element: <BuySuccess />,
      },
      {
        path: "/manageprinter",
        element: <ManagePrinter />,
      },
      {
        path: "/logs",
        element: <Logs />,
      }
    ],
  },
  {
    path: "/signup",
    element: <Login />, // sửa thành Signup sau
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
]);

export default router;
