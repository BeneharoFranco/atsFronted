import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../notfound/NotFound";
import Home from "../page/Home/Home";
import User from "../page/Users/Users";
import Login from "../page/Login/Login";
import JobOpening from "../page/JobOpening/JobOpening";

import About from "../page/About/About";
import AddJobOpening from "../page/JobOpening/Add/Add";
import EditJobOpening from "../page/JobOpening/Edit/Edit";
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
        loader: () => {
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
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
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/User",
        element: <User />,
        loader: () => {
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") !== "admin") {
            return redirect("/Home");
          }else {
            return null;
          }
        },
      },
      {
        path: "/User/Add",
        element: <UserAdd />,
        loader: () => {
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          // if (!localStorage.getItem("token")) {
          //   return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") !== "admin") {
            return redirect("/Home");
          } else {
            return null;
          }
        },
      },
      /* {
        path: "/User/Edit/:id",
        element: <UserEdit />,
        loader: () => {
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") !== "admin") {
            return redirect("/Home");
          } else {
            return null;
          }
        },
      }, */
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
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/JobOpening/Add",
        element: <AddJobOpening />,
        loader: () => {
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/JobOpening/Edit/:idJobOpening",
        element: <EditJobOpening />,
        loader: () => {
          if (!localStorage.getItem("token") || localStorage.getItem("token") == undefined) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("token") && localStorage.getItem("token") !== undefined) {
        return redirect("/Home")  //If the user isn't logged in, we redirect to the login page.
      } else {
        return null;
      }
    },
  },
]);

export default router;
