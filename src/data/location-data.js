const locations = [
  {
    location: "London",
    latitude: 51.509865,
    longitude: -0.118092,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Delhi",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    location: "Toronto",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
];

const getLocations = () => {
  return locations;
};

const getLocationByName = (location) => {
  if (!location) return null;
  const matchedLocation = locations.find(
    (loc) => loc.location.toLowerCase() === location.toLowerCase()
  );
  if (matchedLocation) {
    return matchedLocation;
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
};

export { getLocations, getLocationByName };
