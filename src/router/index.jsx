import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import NotFound from "../notfound/NotFound";
import Home from "../page/Home/Home";

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
    ],
  },
]);

export default router;
