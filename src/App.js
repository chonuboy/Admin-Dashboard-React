import './index.css';
import Product from './pages/Product/Product';
import User from './pages/User/User';
import Users from './pages/Users/Users';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Demo from './Demo';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';



function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Creating Routers;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "users",
          element: <Users />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "products/:id",
          element: <Product />
        },
        {
          path: "users/:id",
          element: <User />
        },
        {
          path: "demo",
          element : <Demo/>
        },
      ]
    }
  ])


  return  <RouterProvider router={router} />
}

export default App;
