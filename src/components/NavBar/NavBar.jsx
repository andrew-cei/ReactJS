import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

// Components
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [value, setValue] = useState("");
  const handleOnChange = (evento) => {
    setValue(evento.target.value);
  };
  const handleOnClick = () => {
    setValue("");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://vitejs.dev/">
          <img src={viteLogo} alt="Bootstrap" width="30" height="24" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ReactJS"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ReactJS/category/AudioCD">
                Audio CD
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Libros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ReactJS/category/Física">
                    Física
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/ReactJS/category/Matemáticas"
                  >
                    Matemáticas
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ReactJS/category/Python">
                    Python
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Próximamente</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <TextField
              id="outlined-basic"
              label="Búsqueda por precio"
              variant="outlined"
              value={value}
              onChange={handleOnChange}
            />
            <Link
              className="btn btn-outline-success"
              to={`/ReactJS/search/${value}`}
              onClick={handleOnClick}
            >
              Buscar
            </Link>
          </form>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
