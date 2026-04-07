import { createBrowserRouter } from "react-router";
import App from "./App";
import Detect from "./pages/Detect";
import Output from "./pages/Output";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detect",
    element: <Detect />,
  },
  {
    path: "/output",
    element: <Output />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element:<Contact/> 
  }
]);

export default router;
