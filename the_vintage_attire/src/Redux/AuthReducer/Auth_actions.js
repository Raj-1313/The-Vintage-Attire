import axios from "axios"
import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS,AUTHSIGNUP_FAILURE,AUTHSIGNUP_REQUEST,AUTHSIGNUP_SUCCESS,LOGOUT} from "./Auth_actionsTypes"


export const logout = ()=>(dispatch)=> {
    dispatch({type:LOGOUT})
}

export const AuthLogin=(payload)=> async (dispatch)=>{
dispatch({type:AUTH_REQUEST})
try{
    const res= await axios.post(`https://vintage-attire-server-new.onrender.com/auth/login`,payload)    
    dispatch({type:AUTH_SUCCESS,payload:res.data})
    
}catch(e){    
    dispatch({type:AUTH_FAILURE,payload:e.response.data})
    
}
}


export const AuthSignUp=(payload)=> async (dispatch)=>{

dispatch({type:AUTHSIGNUP_REQUEST})
try{
    const res= await axios.post(`https://vintage-attire-server-new.onrender.com/auth/signup`,payload)
    dispatch({type:AUTHSIGNUP_SUCCESS})
   return  (res)
}catch(e){
console.log(e.message)
    dispatch({type:AUTHSIGNUP_FAILURE})
}
}
