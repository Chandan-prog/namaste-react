import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItem, setShowItem] = useState(false);

    const headerClickHandler = () => {
        // if(!showItem)
        // {
        //     setShowItem(true);
        // }
        // else{
        //     setShowItem(false);
        // }
        setShowItem(!showItem);
    }
  return (
    <div>
      <div>
        <div className="w-6/12 mx-auto my-4 p-4 shadow-lg rounded-lg bg-gray-50">
          <div className="flex justify-between cursor-pointer" onClick={headerClickHandler}>
            <span className="text-lg font-bold">
              {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          {/* Now let's build the body and click handler */}
          {showItem && <ItemList items={data.itemCards}/>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
