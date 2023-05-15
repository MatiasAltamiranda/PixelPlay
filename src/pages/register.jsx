import { useState, useContext, useEffect } from "react"
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
const navigate = useNavigate();

const {registerUser , isAuth} = useContext(AuthContext)

const [formRegister,setFormRegister] = useState({
    name : "",
    lastname : "",
    email : "",
    password : "",
    confirmPassword : ""
});

const {name,lastname,email,password,confirmPassword} = formRegister

const handleOnChange = e =>{
    setFormRegister({...formRegister, [e.target.name] : e.target.value})
};

const handleOnSubmit = e =>{
    e.preventDefault();
    registerUser(formRegister)
}


useEffect(()=>{
    if(isAuth){
        navigate("/private")
    }
}, [isAuth])

    return(
        <>
           <form style={{marginTop : "10rem"}} onSubmit={handleOnSubmit}>

            <div>
                <label>Nombre</label>
                <input type="text" name="name" value = {name} onChange={handleOnChange} />
            </div>

            <div>
                <label>Apellido</label>
                <input type="text" name="lastname" value = {lastname} onChange={handleOnChange}  />
            </div>

            <div>
                <label>E-mail</label>
                <input type="email" name="email" value = {email} onChange={handleOnChange}  />
            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" name="password" value = {password} onChange={handleOnChange}  />
            </div>

            <div>
                <label>Confirmar contraseña</label>
                <input type="password" name="confirmPassword" value = {confirmPassword} onChange={handleOnChange}  />
            </div>
            <button type="submit">Enviar</button>
           </form>
        </>
    )
}

export default Register