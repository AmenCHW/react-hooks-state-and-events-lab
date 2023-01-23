import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState("true")

  const handleClick = () => {
    setInCart(!inCart)
  }

  const cartState = inCart? "Add to Cart":"Remove From Cart"
  const cartClass = inCart? '':'in-cart'

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartState}</button>
    </li>
  );
}

export default Item;
