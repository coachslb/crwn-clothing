import React from "react";

import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="cart-item" />
    <div className="item-details">
      <div className="name">{name}</div>
      <span className="price">
        {quantity} x {price}€
      </span>
    </div>
  </div>
);

export default CartItem;
