import Swal from "sweetalert2"
import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import clientAxios from "../config/axios";
import authToken from "../config/token";

import {GET_USER,
    IS_LOADING ,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT,
    LOGIN_SUCCESS,
    FORGOT_PASS_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    UPDATE_SUCCESS
    } from "../actions"


const AuthState = (prop) =>{
    const {children} = prop;

    const initialState = {
        token : localStorage.getItem("token"),
        isAuth : false,
        user : null,
        loading : true,
        successMsg : ""
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registerUser = async(data) =>{
        try {
            const response = await clientAxios.post('/api/v1/auth/signup', data);
            dispatch({type : REGISTER_SUCCESS , payload : response.data});
            return response.data;
        } catch (error) {
           return error
        }
    }

    const getUser = async ()=>{
        try {
            const token = localStorage.getItem('token');
            if(token){
                authToken(token)
            }
            const response = await clientAxios.get('/api/v1/auth/user')
            dispatch({type: GET_USER, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }

    const logout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("userData")
        dispatch({type:LOGOUT});
        window.location.reload();   
    }

    const login =async (data)=>{
        try {
            const response = await clientAxios.post('/api/v1/auth/login', data);
            dispatch({type: LOGIN_SUCCESS, payload: response.data})
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userData", JSON.stringify(response.data.data.user));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: error.response.data,
                text: "Revise sus datos"
            })
        }
    }

    const forgotPass = async (data) =>{
        try {
            const response = await clientAxios.post('/api/v1/auth/forgotPassword', data);
            dispatch({type: FORGOT_PASS_SUCCESS, payload:response.data})
        } catch (error) {
            console.log(error)
        }
    }

    const resetPass = async (token,data) =>{
        try {
            const response = await clientAxios.post(`/api/v1/auth/resetPassword/${token}`, data);
            dispatch({type: RESET_PASSWORD_SUCCESS, payload:response.data})
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async (data) =>{
        try {
            const response = await clientAxios.put('/api/v1/users', data)
            dispatch({ type : UPDATE_SUCCESS, payload: response.data.data})
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value = {{...state,registerUser, getUser, logout, login,forgotPass,resetPass, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}


 

export default AuthState;