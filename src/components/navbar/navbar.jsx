import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/pixelPortada.png";
import "./navbar.css";
import Logout from "../logout/logout";



function NavBar() {
 
  const [btn, setBtn] = useState(false);
  const logged = JSON.parse(localStorage.getItem("userData"))


    const [isOpen, setIsOpen] = useState(false)
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }


  
  return (
    <>
  <div>
    
    </div>
      <div className="nav">
        <div className="navbar">
          <Link to="/">
          <img className="navbar_logo" src={logo} alt="Logo pixelplay" />
          </Link>
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
                  to="/"
                >
                  <li className="menu-item">Inicio</li>
                </NavLink>
                <li className="menu-item">Nosotros</li>
                <li className="menu-item">Categorias</li>
                <li className="menu-item">Contacto</li>
              </ul>
            </div>
          </div> 
          
          {(logged)?(<div className="buttons_user
          ">
            <div onClick={toggleDropdown} className="info-user">
             <img className="buttons_profile_photo" src={`${import.meta.env.VITE_APP_USER_IMAGES}/${logged.profilePhoto}`} alt={logged.name}></img>
            <p className="buttons_profile_text">{logged.name}</p>
            </div> 
            {isOpen && (
            <div className="DropDown_User">
              {(logged.role === "admin")? (<Link className="user_rutas" to="/panel-admin"><i className="bi bi-shield-lock user_rutas me-1"></i>Panel admin</Link>):("")}
            <Link className="user_rutas" to="/cart"><i className="bi bi-cart3 user_rutas me-1"></i>Carrito</Link>
            <Link className="user_rutas" to="/profile"><i className="bi bi-person user_rutas me-1"></i> Perfil</Link>
            <Logout className="show show-buttons"/>
            </div>  )}
            </div>) : ( <div className="buttons">
          <NavLink to="/login">
            <button className="menu_btn ingresar show show-buttons">
              Ingresar
            </button>
            </NavLink>
            <NavLink to="/register">
              <button className="menu_btn registro show show-buttons">
                Registrarse
              </button>
            </NavLink>
          </div>)}
         
          
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
          <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "navegation"
                  }
                  to="/"
                >
            <li className="menu-item">Inicio</li>
            </NavLink>
            <li className="menu-item">Nosotros</li>
            <li className="menu-item">Categorias</li>
            <li className="menu-item">Contacto</li>
          </ul>
          {logged ? (<div className="buttons_user_mobile
          ">
            <div className="info-user-mobile">
             <img className="buttons_profile_photo" src={`${import.meta.env.VITE_APP_USER_IMAGES}/${logged.profilePhoto}`} alt={logged.name}></img>
            <p className="buttons_profile_text">{logged.name}</p>
            </div> 
            <div className="DropDown_User_mobile">
            {(logged.role === "admin")? (<Link className="user_rutas" to="/panel-admin"><i className="bi bi-shield-lock user_rutas me-1"></i> Panel admin</Link>):("")}  
            <Link className="user_rutas" to="/cart"><i className="bi bi-cart3 user_rutas me-1"></i>Carrito</Link>
            <Link className="user_rutas" to="/profile"><i className="bi bi-person user_rutas me-1"/> Perfil</Link>
            <Logout className="show show-buttons"/>
            </div> 
            </div>):( <div className="buttons">
          <NavLink to="/login">
            <button className="menu_btn ingresar">Ingresar</button>
            </NavLink>
            <NavLink to="/register">
            <button className="menu_btn registro">Registrarse</button>
            </NavLink>
          </div>)}
         
        </div>
      </div>
    </>
  );
}

export default NavBar;
