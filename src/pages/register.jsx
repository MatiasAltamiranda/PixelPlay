import { useState, useContext, useEffect } from "react"
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

import "./css/register.css";
import logo from "../assets/pixelPortada.png"

const Registro = () => {

 /*  const navigate = useNavigate(); */

 const logged = JSON.parse(localStorage.getItem("userData"))
  

 if(logged){
  window.location.href = "/home"}


const {registerUser} = useContext(AuthContext)

const [formRegister,setFormRegister] = useState({
    name : "",
    lastname : "",
    email : "",
    password : "",
    confirmPassword : ""
});


const limpiarForm=()=>{
  setFormRegister({
    name : "",
    lastname : "",
    email : "",
    password : "",
    confirmPassword : ""
  })
}

const {name,lastname,email,password,confirmPassword} = formRegister;

const handleOnChange = e =>{
  setFormRegister({...formRegister, [e.target.name] : e.target.value})
};


const handleOnSubmit = async (e) => {
  e.preventDefault();
  if (password === confirmPassword) {
    try {
      const response = await registerUser(formRegister);
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada con éxito',
          showConfirmButton: false,
          timer: 1500
        });
        limpiarForm();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'El correo ya existe',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar el usuario contacte al administrador',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error);
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      showConfirmButton: false,
      timer: 1500
    });
  }
};




/* useEffect(()=>{
  if(isAuth){
      navigate("/private")
  }
}, [isAuth]) */


  return (
    <>
    {(logged)? "cargando..." : (<div className="container-fluid contenedor">
        <div className="row">
          <div className="col-12 col-lg-6  col-xl-7 col-xxl-7 contenedor_logo">
            <img className="logoPixel" src={logo} 
            alt="Logo PixelPlay"/>
            <h2 className="text-light text-center contenedor_logo_text">FORMA PARTE DE ESTA COMUNIDAD</h2>
          </div>
          <div className="col-12  col-lg-4  col-xl-4 col-xxl-3 section_formulario">
            <div className="section_formulario">
              <form className="formulario" onSubmit={handleOnSubmit}>
                <h2>REGISTRATE EN PIXEL</h2>
                <p>¡ Es gratis !</p>
                <div className="formulario_group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value = {name}
                    onChange={handleOnChange}
                    minLength="2"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    value = {lastname}
                    onChange={handleOnChange}
                    minLength="2"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    value = {email}
                    onChange={handleOnChange}
                    minLength="4"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value = {password}
                    onChange={handleOnChange} 
                    minLength="8"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value = {confirmPassword}
                    onChange={handleOnChange}
                    minLength="8"
                    maxLength="30"
                    required
                  />
                </div>
                <button type="submit">REGISTRARSE</button>
              </form>
            </div>
          </div>
        </div>
      </div>)}
      
    </>
  );
};

export default Registro;
