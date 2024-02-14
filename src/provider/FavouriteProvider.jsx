import FavouriteContext from "../context/FavouriteContext";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourite", []);
  const addToFavourite = (latitude, longitude, location) => {
    setFavourites([...favourites, { latitude, longitude, location }]);
  };
  const removeFromFavourite = (location) => {
    const restFavourite = favourites.filter((favourite) => {
      return favourite.location !== location;
    });
    setFavourites([...restFavourite]);
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
