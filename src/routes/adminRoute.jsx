import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext"
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

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



    if(loading) return  <section className="LoadingGames d-flex flex-column align-items-center text-white" style={{marginTop:"8rem"}}>
    <Spinner className="display-5" animation="border" variant="light" />
    <p className="display-5">Cargando datos</p>
  </section>

    return  children
}

export default AdminRoute;