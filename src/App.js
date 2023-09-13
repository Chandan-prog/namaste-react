import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const Grocery = lazy(()=>{
  return import('./Components/Grocery');
})

const appRouter  = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element: <Body/>,
      },
      {
        path:'/aboutUs',
        element: <About/>
      },
      {
        path:'/contactUs',
        element: <Contact/>,
      },
      {
        path:'/restaurants/:resid',
        element: <RestaurantMenu/>,
      },
      {
        path:'/grocery',
        element: <Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>,
      }
    ],
    errorElement: <Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);