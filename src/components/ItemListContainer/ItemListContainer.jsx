import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
// Components
import Item from "../Item/Item";
// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [Items, setItems] = useState([]);

  // Consulta a la base de datos de Firebase
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const products = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((prod) => {
        products.push({ ...prod.data(), id: prod.id });
      });
      setItems(products);
    };
    getProducts();
  }, []);

  return (
    <div className="container-fluid">
      <h2>Productos</h2>
      <div id="ListContainer">
        {Items.map((oneItem) => {
          return (
            <div style={{ margin: 5 }} key={oneItem.id}>
              <Link to={`/ReactJS/item/${oneItem.id}`}>
                <Item oneItem={oneItem} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
