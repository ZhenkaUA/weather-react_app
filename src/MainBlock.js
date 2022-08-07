import React from "react";
import Temperature from "./Temperature";
import Description from "./Description";
import City from "./City";
import Day from "./Day";

export default function MainBlock() {
  return (
    <div className="row">
      <div className="col-4">
        <Temperature />
      </div>

      <div className="col-4">
        <Description />
      </div>

      <div className="col-4">
        <City />
        <Day />
      </div>

      <div className="row column-4" id="forecast"></div>
    </div>
  );
}