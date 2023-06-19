import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

// Components
import Item from "../../components/Item/Item";

const ItemPage = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios(
      "https://raw.githubusercontent.com/andrew-cei/ReactJS/main/db/library.json"
    ).then((json) => setItems(json.data.results));
  }, []);
  let { categoryid } = useParams();
  return (
    <div className="container-fluid">
      <h2>{categoryid}</h2>
      <div id="ListContainer">
        {Items.filter((oneItem) => oneItem.category == categoryid).map(
          (oneItem) => {
            return (
              <div style={{ margin: 5 }} key={oneItem.id}>
                <Link to={`/ReactJS/item/${oneItem.id}`}>
                  <Item oneItem={oneItem} />
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ItemPage;
