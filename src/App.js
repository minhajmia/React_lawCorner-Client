import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Route/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Toaster />;
      </RouterProvider>
    </div>
  );
}

export default App;
