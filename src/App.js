import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

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
      }
    ],
    errorElement: <Error/>
  },
  
]);

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body restaurantData={resObj}/>
//       <Footer />
//     </div>
//   );
// };

//This will go to a new page but if we want our header to stay intact then use router children 
// const appRouter  = createBrowserRouter([
//   {
//     path:'/',
//     element: <AppLayout/>,
//     errorElement: <Error/>
//   },
//   {
//     path:'/aboutUs',
//     element: <About/>
//   },
//   {
//     path:'/contactUs',
//     element: <Contact/>,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);