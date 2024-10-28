import { createBrowserRouter, Navigate } from "react-router-dom";  
import Dashboard from "~/pages/dashboard/Dashboard";
import NewUser from "~/pages/users/NewUser";
import routes from "./routes";
import LayoutApp from "~/layouts/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routes.dashboard} />,
  },
  {
    element: <LayoutApp />,
    children: [
      {
        path: routes.dashboard,
        element: <Dashboard />,
      },
      {
        path: routes.newUser,
        element: <NewUser />,
      }
    ]
  }
]);
