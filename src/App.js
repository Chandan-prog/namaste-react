import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./Components/Grocery";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const AppLayout = () => {
  const authClickHandler = (transferedData) => {
    console.log(`This data is transfered from Header component that is being printed in App component
        and we are doing this using state up lifting where we can transfer data from child component to parent
        component by passing an event as a prop and receive data in the function.
        ${transferedData}`);
  };

  const [userName, setUserName] = useState();

  //authentication logic
  useEffect(() => {
    //received some data from api
    const data = {
      userName: "Chandan Mishra",
    };
    setUserName(data.userName);
  }, []);
  return (
    <Provider store={appStore}>
      {/* <UserContext.Provider value={{ loggedInData: userName, setUserName }}> */}
        <div className="app">
          <Header onAuthClick={authClickHandler} />
          <Outlet />
        </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

const Grocery = lazy(() => {
  return import("./Components/Grocery");
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
