import { useContext } from "react"
import AuthContext from "../context/authContext"

const Private = ()=>{
    const {logout} = useContext(AuthContext);

    return(
        <>
            <h1>SOY Private</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Private