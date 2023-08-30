import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import resObj from "./utils/mockData";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body restaurantData={resObj}/>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
