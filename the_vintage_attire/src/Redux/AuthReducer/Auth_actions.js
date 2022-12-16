import axios from "axios"
import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS,AUTHSIGNUP_FAILURE,AUTHSIGNUP_REQUEST,AUTHSIGNUP_SUCCESS} from "./Auth_actionsTypes"


export const AuthLogin=(payload)=> async (dispatch)=>{
dispatch({type:AUTH_REQUEST})
try{
    const res= await axios.post(`https://vintage-attire-deploy.onrender.com/auth/login`,payload)
    dispatch({type:AUTH_SUCCESS,payload:res.data})
}catch(e){
    console.log("object")
    dispatch({type:AUTH_FAILURE})
}
}


export const AuthSignUp=(payload)=> async (dispatch)=>{
    console.log(payload)
dispatch({type:AUTHSIGNUP_REQUEST})
try{
    const res= await axios.post(`https://vintage-attire-deploy.onrender.com/auth/signup`,payload)
    console.log(res)
    // dispatch({type:AUTHSIGNUP_SUCCESS,payload:res.data})
}catch(e){

    dispatch({type:AUTHSIGNUP_FAILURE})
}
}