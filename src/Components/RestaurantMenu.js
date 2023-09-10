import useRestautantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export default function RestaurantMenu ()
{
    const { resid } = useParams();

    const resInfo = useRestautantMenu(resid);

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