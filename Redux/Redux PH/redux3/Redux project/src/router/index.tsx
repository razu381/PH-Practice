import App from "@/App";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default router;
