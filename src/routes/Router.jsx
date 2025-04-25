import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";
import Home from "../pages/Home/Index";

const router = createBrowserRouter([
 {
  path: "/",
  element: <MainLayout />,
  children: [
   {
    path: "/",
    element: <Home />
   },
  ],
 },
]);
export default router;