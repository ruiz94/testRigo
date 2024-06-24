import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import ProductDetail from "../components/ProductDetail";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ]
  },
  
]);

const RouterStore = () => <RouterProvider router={router} />;

export default RouterStore