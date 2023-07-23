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


const authReducer = (state,action) =>{
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth : true,
                user : action.payload.data.user,
                loading : false
            }
            case GET_USER : 
            return{
                ...state,
                user : action.payload.user,
                isAuth : true,
                loading : false
            }
            case FORGOT_PASS_SUCCESS:{
                return{
                    ...state,
                    successMsg : action.payload.message,
                }
            }
            case RESET_PASSWORD_SUCCESS:
                return {
                    ...state
                }
            case UPDATE_SUCCESS:return{
                ...state,
                user : action.payload.user,
                loading : false
            }    
            case LOGOUT : 
            return{
                ...state,
                user : null,
                isAuth : false,
                loading : false
            }
        default :
        return state;
    }
}

export default authReducer;