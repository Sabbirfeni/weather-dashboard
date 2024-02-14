import { useFavouriteContext, useLocationContext } from "../../context";

function FavouriteListModal() {
  const { setSearchLocation, setSearchTerm } = useLocationContext();
  const { favourites } = useFavouriteContext();
  const handleSearchLocation = (fav) => {
    setSearchLocation(fav);
    setSearchTerm("");
  };
  const favouriteEles = favourites.map((fav) => (
    <li
      key={fav.location}
      onClick={(fav) => handleSearchLocation(fav)}
      className="hover:bg-gray-200"
    >
      {fav.location}
    </li>
  ));
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? favouriteEles : "Empty"}
      </ul>
    </div>
  );
}

export default FavouriteListModal;
