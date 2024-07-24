import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/Root";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import SubComponent from "./components/SubComponent";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact/:uid", element: <SubComponent /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:pid", element: <ProductItem /> },
    ],
  },
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
