import React from "react";
import "./Description.css";
import WeatherDescription from "./WeatherDescription";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function Description() {
  return (
    <span className="Description">
      <WeatherDescription />
      <Humidity />
      <Wind />
    </span>
  );
}