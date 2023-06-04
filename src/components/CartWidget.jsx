import React from "react";
import carrito from "../assets/CarritoImg.svg";

const CartWidget = () => {
  return (
    <div className="card" style={{ width: "10rem" }}>
      <img src={carrito} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">5</h5>
        <p className="card-text">Carrito</p>
      </div>
    </div>
  );
};

export default CartWidget;
