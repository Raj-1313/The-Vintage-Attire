import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS,AUTHSIGNUP_FAILURE,AUTHSIGNUP_REQUEST,AUTHSIGNUP_SUCCESS,LOGOUT} from "./Auth_actionsTypes"

const localData= JSON.parse(localStorage.getItem("loginData")) || null
const loginToken= localStorage.getItem("loginToken")|| null


const initialState = {
    isAuth: !!localData || false ,
    failureAuth:null,
    isLoading: false,
    isError: false,
    token:loginToken || null,
    userDetails: localData || null,
  };
  
  const Auth_reducer = (state = initialState,{type,payload}) => {
    switch (type){
      case AUTH_SUCCESS:{
      localStorage.setItem("loginToken",(payload.token))
      localStorage.setItem("loginData",JSON.stringify(payload.User))
      // console.log(payload.token,typeof payload.token)
      return {...state, isAuth:true,isLoading:false,token:payload.token,userDetails:payload.User}
    }
    case AUTH_FAILURE:{
        return {...state, isError:true,isLoading:false,failureAuth:payload}      
      }
      case AUTH_REQUEST:{
        return {...state, isLoading:true,isError:false}
      }
  
      case AUTHSIGNUP_SUCCESS:{
      return {...state,isLoading:false}
    }
    case AUTHSIGNUP_FAILURE:{
        return {...state, isError:true,isLoading:false}      
      }
      case AUTHSIGNUP_REQUEST:{
        return {...state, isLoading:true,isError:false}
      }
      case LOGOUT:{
        localStorage.removeItem("loginData")
        localStorage.removeItem("loginToken")
        return {...state,isAuth:false,token:null,userDetails:null }
      }
  
  
      default :{  
        return state;
      }
    }
  };
  
  export { Auth_reducer };
