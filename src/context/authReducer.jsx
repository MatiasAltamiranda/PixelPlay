import {GET_USER,
IS_LOADING ,
REGISTER_SUCCESS,
REGISTER_ERROR
} from "../actions"


const authReducer = (state,action) =>{
    switch(action.type){
        case REGISTER_SUCCESS :
            return {
                ...state,
                isAuth : true,
                user : action.payload.data.user,
                loading : false
            }
        default :
        return state;
    }
}

export default authReducer;