import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import RestaurantCard, { withBakeryLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState(null);

  const RestaurantCardBakery = withBakeryLabel(RestaurantCard);

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
  // console.log(filteredRestaurant);
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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>You are offline!!!!☹️ Kindly check your internet connections!!!</h1>
    );
  }

  return filteredRestaurant === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button-section flex border border-solid border-black">
        <div className="search-box py-2 ">
          <input
            className="search-input px-4 m-4 border border-solid border-black"
            type="text"
            onChange={searchInputChangeHandler}
            value={searchText}
          />
          <button
            className="px-4 bg-green-300 mr-7 rounded-lg cursor-pointer"
            onClick={searchButtonHandler}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-slate-300 px-4 m-6 rounded-lg cursor-pointer"
          onClick={filterHandler}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap m-4 border border-solid border-black justify-between">
        {filteredRestaurant.map((element) => {
          return (
            <Link key={element.info.id} to={"/restaurants/" + element.info.id}>
              {element.info.cuisines.find((ele)=>{return ele === 'Bakery'}) ? (
                <RestaurantCardBakery restaurantData={element} />
              ) : (
                <RestaurantCard restaurantData={element} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
