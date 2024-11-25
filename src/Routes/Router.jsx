import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Home/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/DashBoard/Cart/AllUsers/AllUsers";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
