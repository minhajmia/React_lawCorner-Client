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
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import ViewDetails from "../../Pages/ViewDeails/ViewDetails";
import UpdateReview from "./../../Pages/UpdateReview/UpdateReview";
import About from "../../Parts/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://server-side-service-review.vercel.app/limitedServices"
          ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "service/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(
            `https://server-side-service-review.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "update/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(
            `https://server-side-service-review.vercel.app/reviews/${params.id}`
          ),
      },
      { path: "about", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
