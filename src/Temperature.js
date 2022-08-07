import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <span className="temperature">15</span>
      <span className="unit">℃|℉</span>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="sunny"
        className="iconWeather"
      />
    </div>
  );
}