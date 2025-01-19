import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ParamsComp from "./components/ParamsComp";
import PageNotfound from "./components/PageNotfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />,
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />,
      </div>
    ),
  },
  {
    path: "/course/:id",
    element: (
      <div>
        <Navbar />
        <ParamsComp />,
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />,
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <PageNotfound />,
      </div>
    ),
  },
]);

const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};
export default App;
