import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import MyReviews from "./../../Pages/MyReviews/MyReviews";
import AddService from "./../../Pages/AddService/AddService";
import Blog from "../../Parts/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/limitedServices"),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
      { path: "myReviews", element: <MyReviews /> },
      { path: "addService", element: <AddService /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
