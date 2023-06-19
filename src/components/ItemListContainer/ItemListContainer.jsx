import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ItemListContainer.css";
// Components
import Item from "../Item/Item";

const ItemListContainer = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios("../../db/library.json").then((json) => setItems(json.data.results));
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
