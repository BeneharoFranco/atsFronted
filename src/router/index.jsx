import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../notfound/NotFound";
import Home from "../page/Home/Home";
import User from "../page/Users/Users";
import Login from "../page/Login/Login";
import JobOpening from "../page/JobOpening/JobOpening";

import About from "../page/About/About";
import AddJobOpening from "../page/JobOpening/Add/Add";
import UserAdd from "../page/Users/UserAdd/UserAdd";
import UserEdit from "../page/Users/UserEdit/UserEdit";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: (
      <Root>
        <NotFound />
      </Root>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/User",
        element: <User />,
      },
      {
        path: "/User/Add",
        element: <UserAdd />,
      },
      {
        path: "/User/Edit/:id",
        element: <UserEdit />,
      },
      {
        path: "/JobOpening",
        element: <JobOpening />,
      },
      {
        path: "/JobOpening/Add",
        element: <AddJobOpening />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
