import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import clientAxios from "../config/axios";
import authToken from "../config/token";

import {GET_USER,
    IS_LOADING ,
    REGISTER_SUCCESS,
    REGISTER_ERROR
    } from "../actions"


const AuthState = (prop) =>{
    const {children} = prop;

    const initialState = {
        token : localStorage.getItem("token"),
        isAuth : false,
        user : null,
        loading : true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registerUser = async(data) =>{
        try {
            const response = await clientAxios.post('/api/v1/auth/signup', data);
            dispatch({type : REGISTER_SUCCESS , payload : response.data});
            localStorage.setItem("token", response.data.token)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value = {{...state,registerUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthState;