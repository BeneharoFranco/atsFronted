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
import Public from "../layouts/Public/Public";

const router = createBrowserRouter([
  {
    path: "/Gestion/login",
    element: <Login />,
    loader: () => {
      if ( localStorage.getItem("token") && localStorage.getItem("token") !== undefined ) {
        if (localStorage.getItem("role") == "admin") {
          return redirect("/Gestion/User");
        } else if(localStorage.getItem("role") == "recruiter") {
          return redirect("/Gestion/Candidate");
        } else{
          return null;
        }
      } else {
        return null;
      }
    },
  },
  {
    path: "/Gestion",
    element: <Root />,
    errorElement: (
      <Root>
        <NotFound />
      </Root>
    ),
    children: [
      {
        path: "/Gestion",
        element: <CandidateAdd />,
        loader: () => {
          if ( !localStorage.getItem("token") || localStorage.getItem("token") == undefined ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/Gestion/Login"); //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") == "admin") {
            return redirect("/Gestion/User");
          } else if(localStorage.getItem("role") == "recruiter") {
            return redirect("/Gestion/Candidate");
          } else{
            return redirect("/Gestion/Login");
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
      //       return redirect("/Gestion/login"); //If the user isn't logged in, we redirect to the login page.
      //     } else {
      //       return null;
      //     }
      //   },
      // },
      {
        path: "/Gestion/User",
        element: <User />,
        loader: () => {
          if ( !localStorage.getItem("token") || localStorage.getItem("token") == undefined ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/Gestion/login"); //If the user isn't logged in, we redirect to the login page.
          } else if (localStorage.getItem("role") == "recruiter") {
            return redirect("/Gestion/Candidate");
          } else{
            return null;
          }
        },
      },
      {
        path: "/Gestion/Candidate",
        element: <Candidate />,
        loader: () => {
          if ( !localStorage.getItem("token") || localStorage.getItem("token") == undefined ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/Gestion/login"); //If the user isn't logged in, we redirect to the login page.
          } else{
            return null;
          }
        },
      },
      {
        path: "/Gestion/JobOpening",
        element: <JobOpening />,
        loader: () => {
          if ( !localStorage.getItem("token") || localStorage.getItem("token") == undefined ) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            return redirect("/Gestion/login"); //If the user isn't logged in, we redirect to the login page.
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
    path: "",
    element: <Public />,
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
          return redirect("/Register");
        },
      },
      {
        path: "/Register",
        element: <CandidateAdd />,
        loader: () => {
          return null;
        },
      },
    ],
    loader: () => {
      return null;
    },
  },
]);

export default router;
