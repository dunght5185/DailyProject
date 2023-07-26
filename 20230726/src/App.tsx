import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Users from "./page/users/Users";
import User from "./page/user/User";
import Products from "./page/products/Products";
import Product from "./page/product/Product";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
//import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu">
            <Menu />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      // children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "users",
      //     element: <Users />,
      //   },
      //   {
      //     path: "products",
      //     element: <Products />,
      //   },
      // ]
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App
