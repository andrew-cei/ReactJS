import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
// Firebase
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemPage = () => {
  const [oneItem, setOneItem] = useState([]);

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
        <div style={{ padding: 20 }}>
          <TextField id="outlined-basic" label="Cantidad" variant="outlined" />
          <Button variant="contained">Añadir</Button>
        </div>
        <p>{oneItem.description}</p>
      </div>
    </div>
  );
};

export default ItemPage;
