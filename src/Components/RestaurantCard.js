import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props.restaurantData);
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restaurantData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={ CDN_URL +cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.slaString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
