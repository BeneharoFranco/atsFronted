import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../notfound/NotFound";
import Home from "../page/Home/Home";
import Users from "../page/Users/Users";
import Login from "../page/Login/Login";
import JobOpening from "../page/JobOpening/JobOpening";

import About from "../page/About/About";
import AddJobOpening from "../page/JobOpening/Add/Add";

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
        path: "/users",
        element: <Users />,
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
