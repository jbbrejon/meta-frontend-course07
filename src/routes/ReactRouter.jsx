// Import dependencies
import { createBrowserRouter, Outlet } from "react-router-dom";

// Import layouts
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

// Import pages
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/Menu/Menu";
import Reservations from "../pages/Reservations/Reservations";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";

// Set standard layout
const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

// Set error layout
const ErrorLayout = () => (
    <>
        <Header />
        <Error />
        <Footer />
    </>
);

// Router configuration
const ReactRouter = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorLayout />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "about",
            element: <About />,
        },
        {
            path: "menu",
            element: <Menu />,
        },
        {
            path: "reservations",
            element: <Reservations />,
        },
        {
            path: "order",
            element: <Order />,
        },
        {
            path: "login",
            element: <Login />,
        },
        ]
    }
]);

export default ReactRouter;