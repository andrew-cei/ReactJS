import carrito from "../../assets/CarritoImg.svg";
import { Link } from "react-router-dom";
// Contexto de ordenes
import { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";

const CartWidget = () => {
  const { orders } = useContext(OrdersContext);
  return (
    <Link className="nav-link active" aria-current="page" to="/ReactJS/pay">
      <div className="card" style={{ width: "10rem" }}>
        <img src={carrito} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{orders.length}</h5>
          <p className="card-text">Carrito</p>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
