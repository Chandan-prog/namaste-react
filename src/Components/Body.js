import React, { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  // const { restaurantData } = props;
  // const { restaurant } = restaurantData;
  // console.log('Body re-rendered on change of input box');

  useEffect(() => {
    fetchData();
  }, []); //This callback function is called after the Body component is rendered only

  const [restaurantList, setRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //We are creating a dublicate var for storing the data so that we can modify it w/o hampering the original data

  const fetchData = async () => {
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(restaurantList);
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

  // console.log('normal console') //This will be rendered 1st then the JSX will be rendered and then the useEffect call back will be rendered

  // if(restaurantList.length===0)
  // {
  //   return <Shimmer/>
  // }

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
        {/* The below code also works */}
        {/* {filteredRestaurant.length > 0
          ? filteredRestaurant.map((element) => {
              return (
                <RestaurantCard
                  restaurantData={element}
                  key={element.info.id}
                />
              );
            })
          : restaurantList.map((element) => {
              return (
                <RestaurantCard
                  restaurantData={element}
                  key={element.info.id}
                />
              );
            })} */}
        
        {/* This will give bug with search filter */}
        {/* {restaurantList.map((element) => {
          return (
            <RestaurantCard restaurantData={element} key={element.info.id}/>
          );
        })} */}
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
