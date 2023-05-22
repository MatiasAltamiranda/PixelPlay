import { useState, useContext, useEffect } from "react"
import AuthContext from "../context/authContext";
import { useNavigate , useParams } from "react-router-dom";
import Swal from "sweetalert2"

import "./css/register.css";

const ResetPassword = () => {

const navigate = useNavigate();

const {token} = useParams();  
const {resetPass} = useContext(AuthContext)

const [formReset,setFormReset] = useState({
    password : "",
    confirmPassword : ""
});




const {password,confirmPassword} = formReset;

const handleOnChange = e =>{
    setFormReset({...formReset, [e.target.name] : e.target.value})
};

const handleOnSubmit = e =>{
  e.preventDefault();
  if(password === confirmPassword){
    resetPass(token,formReset)
    Swal.fire({
      icon: 'success',
      title: 'La contraseña fue modificada con exito',
      showConfirmButton: false,
      timer: 1500
  })
  setTimeout(()=>{navigate("/login")},1600)
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      showConfirmButton: false,
      timer: 1500
  }) }


}


/* useEffect(()=>{
  if(isAuth){
      navigate("/private")
  }
}, [isAuth]) */


  return (
    <>
      <div className="container-fluid contenedor">
        <div className="row">
            <div className="section_formulario">
              <form className="formulario" onSubmit={handleOnSubmit}>
                <h2>Nueva contraseña</h2>
                <p>Introduce la nueva contraseña</p>
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
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default ResetPassword;
