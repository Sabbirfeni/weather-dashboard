import React from "react";
import HeartImage from "../../assets/heart.svg";
import { useFavouriteContext } from "../../context";
function AddToFavourite() {
  const { favourites } = useFavouriteContext();
  console.log(favourites);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          <img src={HeartImage} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavourite;
