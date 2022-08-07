import React from "react";

export default function Wind() {
  let weatherData = {
    wind: 11
  };
  return <div className="Wind">Wind: {weatherData.wind}km/h</div>;
}