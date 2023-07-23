import { useContext } from "react"
import AuthContext from "../../context/authContext"
import "./logout.css"

const Logout = ()=>{
    const {logout} = useContext(AuthContext);

    return(
        <>
            <button className="btn_logout" onClick={logout}>Cerrar sesión</button>
        </>
    )
}

export default Logout