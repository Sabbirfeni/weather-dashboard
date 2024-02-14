import { useState } from "react";
import { LocationContext } from "../context/LocationContext";

const LocationProvider = ({ children }) => {
  const [searchLocation, setSearchLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <LocationContext.Provider
      value={{ searchLocation, setSearchLocation, searchTerm, setSearchTerm }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
