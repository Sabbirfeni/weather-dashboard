import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import FavouriteContext from "./FavouriteContext";
import { LocationContext } from "./LocationContext";

const useWeatherContext = () => useContext(WeatherContext);
const useFavouriteContext = () => useContext(FavouriteContext);
const useLocationContext = () => useContext(LocationContext);

export { useWeatherContext, useFavouriteContext, useLocationContext };
