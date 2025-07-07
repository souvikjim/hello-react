import { useState, useEffect } from "react";
import { ResturantCards } from "./ResturantCards";
import { Shimmer } from "./Shimmer";

export const BodyComponent = () => {
  const [cardData, setCardData] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5782121&lng=88.4477171&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const updatedData = await data.json();
    const xyz =
      updatedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (item) => item.info
      );
    setTotalItems(xyz);
  };

  useEffect(() => {
    setCardData(totalItems);
  }, [totalItems]);

  return (
    <div className="body">
      <div className="search"> search</div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={() =>
          setCardData(
            totalItems.filter((item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase())
            )
          )
        }
      >
        Submit
      </button>
      <button
        className="filter"
        onClick={() => {
          setCardData(totalItems.filter((card) => card?.avgRatingString > 4.3));
        }}
      >
        filterby rating
      </button>
      <div className="res-cards">
        {cardData?.length === 0 ? (
          <Shimmer />
        ) : (
          cardData.map((card) => (
            <ResturantCards key={card?.id} cardsData={card} />
          ))
        )}
      </div>
    </div>
  );
};
