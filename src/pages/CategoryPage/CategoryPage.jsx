import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

import axios from "axios";

// Components
import Item from "../../components/Item/Item";

const ItemPage = () => {
  const [Items, setItems] = useState([]);
  // Uso de parámetro categoría
  let { categoryid } = useParams();

  // Consulta a la base de datos de Firebase por categoría
  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", categoryid)
      );
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
      <h2>{categoryid}</h2>
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

export default ItemPage;
