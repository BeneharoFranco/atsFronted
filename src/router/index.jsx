import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../notfound/NotFound";
import Home from "../page/Home/Home";
import About from "../page/About/About";

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
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
