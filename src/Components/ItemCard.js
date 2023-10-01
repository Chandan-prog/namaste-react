import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ itemData, rawItemData }) => {
  const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+itemData.imageId;
  const dispatch = useDispatch();
  const addButtonHandler = (rawItemData) => {
    dispatch(addItem(rawItemData));
  }
  return (
    <div>
      <div className="m-2 p-2 shadow-md flex justify-between">
        <div className="flex flex-col p-3 text-left">
          <span className="font-bold">{itemData.name}</span>
          <span className="my-2 py-2">Rs.{itemData.price / 100 || itemData.defaultPrice / 100}</span>
          <div className="text-left text-xs text-slate-500">{itemData.description}</div>
        </div>
        <div>
            <div className="absolute">
                <button className=" text-cyan-100 bg-green-800 px-2 rounded-md" onClick={()=>addButtonHandler(rawItemData)}> Add + </button>
            </div>
            <img className='max-w-screen-sm' src={imgURL}/>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
