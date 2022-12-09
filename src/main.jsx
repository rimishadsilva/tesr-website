import { createBrowserRouter } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import Teams from "./pages/Teams";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);
