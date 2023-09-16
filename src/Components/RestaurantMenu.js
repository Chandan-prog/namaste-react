import useRestautantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function RestaurantMenu() {
  const { resid } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestautantMenu(resid);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-10 text-3xl">{name}</h1>
      <p className="italic font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndexItem={() => 
                setShowIndex(index)
            }
          />
        );
      })}
    </div>
  );
}
