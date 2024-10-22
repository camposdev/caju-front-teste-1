import { createBrowserRouter, Navigate } from "react-router-dom";  
import DashboardPage from "~/pages/Dashboard";
import NewUserPage from "~/pages/NewUser";
import routes from "./routes";
import LayoutApp from "~/layouts/App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        path: routes.dashboard,
        element: <DashboardPage />,
      },
      {
        path: routes.newUser,
        element: <NewUserPage />,
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to={routes.dashboard} />,
  }
]);
