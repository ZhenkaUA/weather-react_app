import React from "react";

export default function WeatherDescription() {
  let weatherData = {
    description: "Overcast Clouds"
  };
  return <div className="WeatherDescription">{weatherData.description}</div>;
}
