import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemPage = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/andrew-cei/ReactJS/main/db/library.json"
    ).then((json) => setItems(json.data.results));
  }, []);
  let { id } = useParams();
  return (
    <div className="container-fluid">
      {Items.filter((oneItem) => oneItem.id == id).map((oneItem) => {
        return (
          <div style={{ margin: 5 }} key={oneItem.id}>
            <h2>{oneItem.title}</h2>
            <img src={oneItem.image} style={{ width: 300 }} />
            <p>{oneItem.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemPage;
