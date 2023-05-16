import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/pixelPortada.png";
import "./navbar.css";

function NavBar() {
  const [btn, setBtn] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="navbar">
          <img className="navbar_logo" src={logo} alt="Logo pixelplay" />

          <div className="icons">
            <i
              className={
                btn ? "bi bi-list icon show" : "bi bi-list icon icon-list close"
              }
              onClick={() => {
                setBtn(!btn);
              }}
            ></i>

            <div className="menu-navbar">
              <i
                className={
                  btn ? "bi bi-x-circle icon close" : "bi bi-x-circle icon show"
                }
                onClick={() => {
                  setBtn(!btn);
                }}
              ></i>
              <ul>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "navegation"
                  }
                  to="/home"
                >
                  <li className="menu-item">Inicio</li>
                </NavLink>
                <li className="menu-item">Nosotros</li>
                <li className="menu-item">Categorias</li>
                <li className="menu-item">Contacto</li>
              </ul>
            </div>
          </div>

          <div className="buttons">
            <button className="menu_btn ingresar show show-buttons">
              Ingresar
            </button>
            <NavLink to="/registro">
              <button className="menu_btn registro show show-buttons">
                Registrarse
              </button>
            </NavLink>
          </div>
        </div>

        <div className={btn ? "menu close" : "show "}>
          <i
            className={
              btn
                ? "bi bi-x-circle icon icon-close"
                : "bi bi-x-circle icon show"
            }
            onClick={() => {
              setBtn(!btn);
            }}
          ></i>
          <ul>
            <li className="menu-item">Inicio</li>
            <li className="menu-item">Nosotros</li>
            <li className="menu-item">Categorias</li>
            <li className="menu-item">Contacto</li>
          </ul>
          <div className="buttons">
            <button className="menu_btn ingresar">Ingresar</button>
            <button className="menu_btn registro">Registrarse</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
