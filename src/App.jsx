import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola" />
    </div>
  );
}

export default App;
