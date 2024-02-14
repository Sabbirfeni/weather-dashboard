import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import FavouriteContext from "./FavouriteContext";

const useWeatherContext = () => useContext(WeatherContext);
const useFavouriteContext = () => useContext(FavouriteContext);

export { useWeatherContext, useFavouriteContext };
