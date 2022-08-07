import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input
        type="text"
        placeholder="Enter the city"
        autoComplete="off"
        autoFocus="on"
      />
      <input type="submit" value="🔎" />
    </form>
  );
}