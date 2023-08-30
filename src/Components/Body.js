import React, { useState } from "react";
//useState is a named import while React is a default import
import RestaurantCard from "./RestaurantCard";

const Body = (props) => {
  const { restaurantData } = props;
  const { restaurant } = restaurantData;

  //hook is a utility function that is provided by react
  const [restaurantList, setRestaurantList] = useState(restaurant);
  // here useState returns an array and here we are destructuting it
  
  // whenever there is a state change by the statechange function, react triggers the diff algorithm that compares the diff between
  // the prev state and current state using virtual dom (which is again nothing but react element which is a JS object) and then only
  // updates the actual dom
  // This whole algo/process is known as react fibre or reconciliation algorithm

  const filterHandler = () => {
    let filteredRestaurantList = restaurantList.filter((restaurant) => {
      return restaurant.info.avgRating > 4.5;
    });
    setRestaurantList(filteredRestaurantList);
  };
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button className="filter-btn" onClick={filterHandler}>
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {restaurantList.map((element) => {
          return (
            <RestaurantCard restaurantData={element} key={element.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
