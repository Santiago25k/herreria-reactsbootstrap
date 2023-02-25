//*pages
import Home from "./pages/Home/Home";
import Works from "./pages/Works";
import About from "./pages/About";

//*react-router-dom v.6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "works",
      element: <Works />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
