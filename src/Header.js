import React from "react";
import Search from "./Search";
import Location from "./Location";
import Time from "./Time";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">
          <Search />
        </div>

        <div className="col-5"></div>

        <div className="col-1">
          <Location />
          <Time />
        </div>
      </div>
      <br />
    </div>
  );
}