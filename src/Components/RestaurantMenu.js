import useRestautantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
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

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (res) => res?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )

    // console.log(categories);

    return(
        <div className="text-center ">
        <h1 className="font-bold my-10 text-3xl">{name}</h1>
        <p className="italic font-bold text-lg">{cuisines.join(', ')} - 
         {costForTwoMessage}</p>

        {categories.map((category) => 
            {
                // console.log(category);
                return <RestaurantCategory key={category?.card?.card.id} data={category?.card?.card}/>
            }
        )}


        {/* <h1>Menu</h1>
        <ul>
            {itemCards.map((food) => 
            {
               return <li key={food.card.info.id}>{food.card.info.name} - Rs{food.card.info.price/100}</li>
            })}   
        </ul> */}
    </div>
        
    )
}