import { useEffect, useState } from "react";
import { useLocationContext } from "../context";

const useWeather = () => {
  const { searchLocation } = useLocationContext();
  console.log(searchLocation);
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTempareture: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  // console.log(weatherData);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=887ed62fd2cf41a090689225477a9074&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTempareture: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude,
        latitude,
      };
      return updateWeatherData;
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    let ignor = false;
    // setLoading((loading) => ({
    //   ...loading,
    //   state: false,
    //   message: "Finding location...",
    // }));
    if (searchLocation.latitude && searchLocation.longitude) {
      const fetchData = async () => {
        const fetchedWeatherData = await fetchWeatherData(
          searchLocation.latitude,
          searchLocation.longitude
        );
        if (!ignor) {
          setWeatherData({ ...fetchedWeatherData });
        }
      };
      fetchData();
    } else {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const data = await fetchWeatherData(
          position.coords.latitude,
          position.coords.longitude
        );
        if (!ignor) {
          setWeatherData({ ...data });
        }
      });
    }

    return () => {
      ignor = true;
    };
  }, [searchLocation]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
