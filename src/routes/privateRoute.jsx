import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (prop)=>{
    const {children} = prop
    const {isAuth , loading, getUser, token} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isAuth && token){
            getUser();
        }
    } , [])


    useEffect(()=>{
        if(!isAuth){
            navigate('/home')
        }
    },[isAuth, navigate])

    if(loading) return <p>Cargando...</p>

    
    return children;
}

export default PrivateRoute;