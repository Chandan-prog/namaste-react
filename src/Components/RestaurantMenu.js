import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

export default function RestaurantMenu ()
{
    const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();
    console.log(resid);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch(MENU_URL+resid);
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=10575")
        const json = await data.json();
        setResInfo(json.data);
    } 

    if(resInfo===null)
    {
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="Menu">
        <h1>{name}</h1>
        <p>{cuisines.join(', ')} - 
         {costForTwoMessage}</p>
        <h1>Menu</h1>
        <ul>
            {itemCards.map((food) => 
            {
               return <li key={food.card.info.id}>{food.card.info.name} - Rs{food.card.info.price/100}</li>
            })}   
        </ul>
    </div>
        
    )
}