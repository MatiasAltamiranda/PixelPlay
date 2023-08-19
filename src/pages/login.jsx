import { useState, useContext, useEffect } from "react"
import AuthContext from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";


import "./css/register.css";
import "./css/login.css";

const Login = () => {

  const navigate = useNavigate();
  const logged = JSON.parse(localStorage.getItem("userData"))
  
const {login , isAuth} = useContext(AuthContext)

const [formLogin,setFormLogin] = useState({
    email : "",
    password : "",
});


const {email,password} = formLogin;

const handleOnChange = e =>{
    setFormLogin({...formLogin, [e.target.name] : e.target.value})
};

const handleOnSubmit = e =>{
  e.preventDefault();
  login(formLogin)
}


useEffect(()=>{
  if(logged && logged.role==="user"){
     window.location.href="/"
  }else if (logged && logged.role==="admin"){
    window.location.href="/panel-admin"
  }
}, [logged])


  return (
    <>
    {(logged)? "Redirigienado espere" : ( <div className="container-fluid contenedor contenedor-login">
        <div className="row">
          <div className="col-12  section_formulario">
            <div className="section_formulario">
              <form className="formulario" onSubmit={handleOnSubmit}>
                <h2>INGRESAR</h2>
                <p>¡ Es un gusto volver a saber de ti !</p>
               
               
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
              
                <button type="submit">INICIAR SESION</button>
              </form>
              <Link className="fortgotText" to="/forgotpassword"><h5 className="text-center mt-4 fortgotText">¿Olvido su contraseña?</h5></Link>
            </div>
          </div>
        </div>
      </div>)}
     
    </>
  );
};

export default Login;
