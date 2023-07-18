import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// Contexto de ordenes
import { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
// Firebase
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemPage = () => {
  const { orders, setOrders } = useContext(OrdersContext);
  const [oneItem, setOneItem] = useState([]);
  const [value, setValue] = useState(1);
  const handleOnChange = (evento) => {
    setValue(evento.target.value);
  };
  const handleOnSubmit = (evento, oneItem) => {
    evento.preventDefault();
    if (!isNaN(value)) {
      setOrders([...orders, { quantity: parseInt(value), oneItem }]);
    }
    setValue(1);
  };

  // Uso de parámetro id
  let { id } = useParams();

  // Consulta a la base de datos de Firebase (un solo producto)
  useEffect(() => {
    const getProducts = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      setOneItem(docSnap.data());
    };
    getProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div style={{ margin: 5 }} key={oneItem.id}>
        <h2>{oneItem.title}</h2>
        <img src={oneItem.image} style={{ width: 300 }} />
        <p>${oneItem.price}</p>
        <form onSubmit={(e) => handleOnSubmit(e, oneItem)}>
          <TextField
            id="outlined-basic"
            label="Cantidad"
            variant="outlined"
            value={value}
            onChange={handleOnChange}
          />
          <Button variant="contained" type="submit">
            Añadir
          </Button>
        </form>
        <p>{oneItem.description}</p>
      </div>
    </div>
  );
};

export default ItemPage;
