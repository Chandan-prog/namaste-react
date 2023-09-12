import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props.restaurantData);
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restaurantData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-slate-300 rounded-lg  hover:bg-slate-500">
      <img
        className="res-logo rounded-lg"
        src={ CDN_URL +cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.slaString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
