import React from "react";

const ItemListContainer = (props) => {
  return (
    <div class="card">
      <p class="card-body">{props.greeting}</p>
    </div>
  );
};

export default ItemListContainer;
