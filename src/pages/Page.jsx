import React from "react";
import Header from "../components/header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";

import { useWeatherContext } from "../context";

function Page() {
  const { loading } = useWeatherContext();
  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default Page;
