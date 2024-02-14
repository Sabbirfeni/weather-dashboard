import React, { useEffect, useState } from "react";
import HeartImage from "../../assets/heart.svg";
import RedHeartImage from "../../assets/heart-red.svg";
import { useFavouriteContext, useWeatherContext } from "../../context";
function AddToFavourite() {
  const { favourites, addToFavourite, removeFromFavourite } =
    useFavouriteContext();
  const {
    weatherData: { location, latitude, longitude },
  } = useWeatherContext();
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location == location);

    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    if (found) {
      setIsFavourite(true);
    }
  }, []);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartImage : HeartImage} alt="heart" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavourite;
