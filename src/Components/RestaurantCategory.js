
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setShowIndexItem }) => {
  // const [toggle, setToggle] = useState(true);
    const headerClickHandler = () => {
      // setToggle(!toggle);
      setShowIndexItem();
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
          {showItem && <ItemList items={data.itemCards}/>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
