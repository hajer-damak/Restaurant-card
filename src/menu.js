import React from "react";
import items from "./data";

function Menu({ choice }) {
  const getFilteredMenu = () => {
    var mySelectedItems = items;
    if (choice !== "all") {
      mySelectedItems = items.filter((item) => item.category === choice);
    }
    return mySelectedItems;
  };

  return (
    <div className="section-center">
      {getFilteredMenu().map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
