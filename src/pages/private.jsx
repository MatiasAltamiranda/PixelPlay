import { useContext } from "react"
import AuthContext from "../context/authContext"
import {Link} from "react-router-dom"


const Private = ()=>{
    const {logout} = useContext(AuthContext);

    return(
        <>
            <h1 style={{ marginTop : '200px' }}>SOY Private</h1>
            <Link to="/profile">PROFILE</Link><br></br>
            <Link to="/panel-admin">Administrador</Link><br></br>
            <button style={{ marginBottom : "200px" }} onClick={logout}>Logout</button>
        </>
    )
}

export default Private