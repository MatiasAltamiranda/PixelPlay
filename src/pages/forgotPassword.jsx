import { useState, useContext} from "react"
import AuthContext from "../context/authContext";

import "./css/register.css";
import "./css/login.css";

const ForgotPassword = () => {


  
const {forgotPass, successMsg} = useContext(AuthContext)

const [formPassword,setFormPassword] = useState({
    email : "",
});
const [loading, setLoading] = useState(false);

const {email} = formPassword;

const handleOnChange = e =>{
    setFormPassword({...formPassword, [e.target.name] : e.target.value})
};

const handleOnSubmit = e =>{
  e.preventDefault();
  setLoading(true);
  forgotPass(formPassword).then(() => {
    setLoading(false);
  })
}




  return (
    <>
      <div className="container-fluid contenedor contenedor-login">
        <div className="row">
          <div className="col-12  section_formulario">
            <div className="section_formulario">
              <form className="formulario" onSubmit={handleOnSubmit}>
                <h2>RECUPERAR CONTRASEÑA</h2>
                <p>Ingresa tu correo electrónico para recibir un mensaje de recuperación</p>
               
               
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
        
                <button type="submit">ENVIAR</button>
              </form>
              {loading ? (
                <h5 className="text-center text-light mt-4">Espere estamos enviando el mail a su casilla...</h5>
              ) : (
                successMsg && <h5 className="text-center text-light mt-4">{successMsg}</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
