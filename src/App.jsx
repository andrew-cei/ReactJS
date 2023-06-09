import "./App.css";

// Components
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import ItemListPage from "./pages/ItemListPage/ItemListPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/ReactJS" element={<ItemListPage />} />
          <Route path="/ReactJS/item/:id" element={<ItemPage />} />
          <Route
            path="/ReactJS/category/:categoryid"
            element={<CategoryPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
