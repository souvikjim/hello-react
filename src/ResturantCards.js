export const ResturantCards = (props) => {
  const data = props?.cardsData;
  return (
    <div className="res-card">
      <img
        className="res_logo"
        alt="food_img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.cloudinaryImageId
        }
      ></img>
      <h3>{data.name}</h3>
      <div className="star_timing">
        <h3>{data.avgRatingString}</h3>
        <span className="order_timing">{data.costForTwo}</span>
      </div>
      <h4>{data.cuisines.join(", ")}</h4>
    </div>
  );
};
