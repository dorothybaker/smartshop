import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import Category from "./pages/Category";
import Success from "./pages/Success";

function Layout() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:category", element: <Category /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/success", element: <Success /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
