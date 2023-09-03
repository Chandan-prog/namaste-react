import React, { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { SWIGGY_URL } from "../utils/constants";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterHandler = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.3;
    });
    setRestaurantList(filteredRestaurantList);
  };

  const searchInputChangeHandler = (ev) => {
    setSearchText(ev.target.value);
  };

  const searchButtonHandler = () => {
    const filteredRestaurantList = restaurantList.filter((restaurant) => {
      const name = restaurant?.info?.name.toLowerCase();
      return name.includes(searchText.toLocaleLowerCase());
    });
    setFilteredRestaurant(filteredRestaurantList);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button-section">
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            onChange={searchInputChangeHandler}
            value={searchText}
          />
          <button className="search-btn" onClick={searchButtonHandler}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((element) => {
          return (
            <RestaurantCard restaurantData={element} key={element.info.id}/>
          );
        })} 
      </div>
    </div>
  );
};

export default Body;
