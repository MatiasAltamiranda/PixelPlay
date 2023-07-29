import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (prop)=>{
    const {children} = prop
    const {isAuth , loading, getUser, token} = useContext(AuthContext)
    const navigate = useNavigate();
    const logged = JSON.parse(localStorage.getItem("userData"))

    
    useEffect(()=>{
        if(!isAuth && token){
            getUser();
        }
    } , [])


    useEffect(()=>{
        if(!logged){
            navigate('/')
        }
    },[isAuth, navigate])

    if(loading) return <p>Cargando...</p>

    
    return children;
}

export default PrivateRoute;