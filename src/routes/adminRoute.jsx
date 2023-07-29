import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext"
import { useNavigate } from "react-router-dom";

const AdminRoute = (prop) =>{
    const {children} = prop
    const {loading, isAuth, getUser,token,user} = useContext(AuthContext);
    const navigate = useNavigate();
    const logged = JSON.parse(localStorage.getItem("userData"))

    useEffect(()=>{
        if(!isAuth && token){
            getUser();
        }
    } , [])


    useEffect(()=>{
      if(!logged || logged.role !== "admin"){
          navigate('/')
      }
  },[isAuth, navigate])



    if(loading) return <p>Cargando...</p>

    return  children
}

export default AdminRoute;