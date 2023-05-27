import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";
import Error from "../pages/Error.jsx";
import Registration from "../pages/Registration.jsx";
import Event from "../pages/Event.jsx";
import EventDetails from "../pages/EventDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Event />,
            },
            {
                path: "/event/:id",
                element: <EventDetails />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
        ]
    }
])