import React from "react";

export default function Humidity() {
  let weatherData = {
    humidity: 87
  };
  return <div className="Humidity">Humidity: {weatherData.humidity}%</div>;
}