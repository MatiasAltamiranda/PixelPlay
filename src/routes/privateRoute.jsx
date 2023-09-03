import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

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

    if(loading) return  <section className="LoadingGames d-flex flex-column align-items-center text-white" style={{marginTop:"8rem"}}>
    <Spinner className="display-5" animation="border" variant="light" />
    <p className="display-5">Cargando</p>
  </section>

    
    return children;
}

export default PrivateRoute;