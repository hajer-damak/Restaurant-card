import React, { useState } from "react";
import Menu from "./menu";

function Categories() {
  const [choice, setChoice] = useState("all");

  return (
    <div>
      <div className="btn-container">
        <button className="filter-btn" onClick={() => setChoice("all")}>all</button>
        <button className="filter-btn" onClick={() => setChoice("breakfast")}>breakfast</button>
        <button className="filter-btn" onClick={() => setChoice("lunch")}>lunch</button>
        <button className="filter-btn" onClick={() => setChoice("shakes")}>shakes</button>
      </div>
      <Menu choice={choice} />
    </div>
  );
}

export default Categories;
