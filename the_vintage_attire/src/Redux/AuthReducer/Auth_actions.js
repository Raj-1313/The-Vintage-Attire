import axios from "axios"
import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS} from "./Auth_actionsTypes"



export const AuthLogin=(payload)=> async (dispatch)=>{
    console.log(payload)
dispatch({type:AUTH_REQUEST})
try{
    const res= await axios.post(`http://localhost:8080/auth/login`,payload)
    dispatch({type:AUTH_SUCCESS,payload:res.data})
}catch(e){

    dispatch({type:AUTH_FAILURE})
}
}