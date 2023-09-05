import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { SWIGGY_URL } from "../utils/constants";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState(null);

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
    setFilteredRestaurant(filteredRestaurantList);
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

  return filteredRestaurant === null ? (
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
           <Link key={element.info.id}
           to={"/restaurants/"+element.info.id}> <RestaurantCard restaurantData={element} /> </Link>
          );
        })} 
      </div>
    </div>
  );
};

export default Body;
