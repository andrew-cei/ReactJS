import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// Contexto de ordenes
import { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
// Firebase
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
// Componentes
import Alert from "@mui/material/Alert";

const ItemPage = () => {
  const { orders, setOrders } = useContext(OrdersContext);
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleOnNameChange = (evento) => {
    setName(evento.target.value);
  };
  const handleOnPhoneChange = (evento) => {
    setPhone(evento.target.value);
  };
  const handleOnEmailChange = (evento) => {
    setEmail(evento.target.value);
  };

  const handleOnSubmit = (evento) => {
    evento.preventDefault();
    if (name != "" && phone != "" && email != "") {
      sentOrder(name, phone, email);
      setOrders([]);
      setName("");
      setPhone("");
      setEmail("");
    }
  };
  // Escritura de la orden en la base de datos
  const sentOrder = (name, phone, email) => {
    const order = {
      buyer: {
        nombre: name,
        telefono: phone,
        correo: email,
      },
      items: orders,
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };
  return (
    <div className="container-fluid">
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((Product) => {
            return (
              <tr key={Product.oneItem.id}>
                <td>{Product.oneItem.title}</td>
                <td>{Product.quantity}</td>
                <td>${Product.quantity * Product.oneItem.price}</td>
              </tr>
            );
          })}
          <tr>
            <td>Total:</td>
            <td></td>
            <td>
              $
              {orders.reduce(
                (a, b) => a + parseInt(b.quantity) * parseInt(b.oneItem.price),
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Nombre:</label>
        <TextField
          id="name"
          variant="outlined"
          value={name}
          onChange={handleOnNameChange}
        ></TextField>
        <br></br>
        <label htmlFor="phone">Teléfono:</label>
        <TextField
          id="phone"
          variant="outlined"
          value={phone}
          onChange={handleOnPhoneChange}
        ></TextField>
        <br></br>
        <label htmlFor="email">Email:</label>
        <TextField
          id="email"
          variant="outlined"
          value={email}
          onChange={handleOnEmailChange}
        ></TextField>
        <br></br>
        <Button variant="contained" type="submit">
          Comprar
        </Button>
        {orderId != "" ? (
          <Alert severity="success">
            Tu orden fué procesada con el siguiente código: {orderId}
          </Alert>
        ) : (
          <Alert severity="info">
            Por favor escribe los datos solicitados para realizar la orden.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default ItemPage;
