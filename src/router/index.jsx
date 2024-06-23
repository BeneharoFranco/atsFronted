import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../notfound/NotFound";
import Home from "../page/Home/Home";
import Users from "../page/Users/Users";
import Login from "../page/Login/Login";
import JobOpening from "../page/JobOpening/JobOpening";

import About from "../page/About/About";
import AddJobOpening from "../page/JobOpening/Add/Add";
import EditJobOpening from "../page/JobOpening/Edit/Edit";

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
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/Home",
        element: <Home />,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/JobOpening",
        element: <JobOpening />,
        // children: [
        //   { 
        //     index: true, 
        //     element: <JobOpening /> 
        //   },
        //   {
        //     path: "/add",
        //     element: <AddJobOpening />,
        //   },
        //   {
        //     path: "/edit/:id",
        //     element: <EditJobOpening />,
        //   },
        // ],
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/JobOpening/add",
        element: <AddJobOpening />,
      },
      {
        path: "/JobOpening/edit/:idJobOpening",
        element: <EditJobOpening />,
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
