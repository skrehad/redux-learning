import App from "@/App";
import Login from "@/pages/login";
import Tasks from "@/pages/tasks";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default routes;
