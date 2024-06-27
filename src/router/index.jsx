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
import Candidate from "../page/Candidate/Candidate";
import CandidateAdd from "../page/Candidate/CandidateAdd/CandidateAdd";
import Company from "../page/Company/Company";

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
        element: <CandidateAdd />,
        loader: () => {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") == undefined
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/Register"); //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") == "admin") {
            return redirect("/User");
          } else if (localStorage.getItem("role") == "recruiter") {
            return redirect("/Candidate");
          } else {
            return null;
          }
        },
      },
      // {
      //   path: "/Home",
      //   element: <Home />,
      //   loader: () => {
      //     if (
      //       !localStorage.getItem("token") ||
      //       localStorage.getItem("token") == undefined
      //     ) {
      //       localStorage.removeItem("token");
      //       localStorage.removeItem("role");
      //       return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
      //     } else {
      //       return null;
      //     }
      //   },
      // },
      {
        path: "/User",
        element: <User />,
        loader: () => {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") == undefined
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") == "recruiter") {
            return redirect("/Candidate");
          } else {
            return null;
          }
        },
      },
      {
        path: "/Candidate",
        element: <Candidate />,
        loader: () => {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") == undefined
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/Register",
        element: <CandidateAdd /> /* ,
        loader: () => {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") == undefined
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          }
        }, */,
      },
      {
        path: "/JobOpening",
        element: <JobOpening />,
        loader: () => {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") == undefined
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      {
        path: "/Company",
        element: <Company />,
        loader: () => {
          if (
            !localStorage.getItem("token") ||
            localStorage.getItem("token") == undefined
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/login"); //If the user isn't logged in, we redirect to the login page.
          } else {
            return null;
          }
        },
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== undefined
      ) {
        if (localStorage.getItem("role") == "admin") {
          return redirect("/User");
        } else if (localStorage.getItem("role") == "recruiter") {
          return redirect("/Candidate");
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
  },
]);

export default router;
