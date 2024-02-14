import { useEffect, useState } from "react";

const useWeather = () => {
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
      return data;
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
    navigator.geolocation.getCurrentPosition(async (position) => {
      const data = await fetchWeatherData(
        position.coords.latitude,
        position.coords.longitude
      );
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
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
      if (!ignor) {
        setWeatherData(updateWeatherData);
      }
    });
    return () => {
      ignor = true;
    };
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
