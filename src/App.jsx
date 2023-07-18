import "./App.css";
import { OrdersProvider } from "./context/OrdersContext";

// Components
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import ItemListPage from "./pages/ItemListPage/ItemListPage";
import ItemListPayPage from "./pages/ItemListPayPage/ItemListPayPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  return (
    <OrdersProvider>
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
            <Route path="/ReactJS/pay" element={<ItemListPayPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/ReactJS/search/:searchTerm"
              element={<SearchPage />}
            />
          </Routes>
        </div>
      </Router>
    </OrdersProvider>
  );
};

export default App;
