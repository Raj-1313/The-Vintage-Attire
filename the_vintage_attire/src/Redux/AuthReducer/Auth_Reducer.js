import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS} from "./Auth_actionsTypes"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: null,
  };
  
  const Auth_reducer = (state = initialState,{type,payload}) => {
    switch (type){
      case AUTH_SUCCESS:{
      return {...state, isAuth:true,isLoading:false,token:payload}
    }
    case AUTH_FAILURE:{
        return {...state, isError:true,isLoading:false}      
      }
      case AUTH_REQUEST:{
        return {...state, isLoading:true,isError:false}
      }
  
  
      default :{  
        return state;
      }
    }
  };
  
  export { Auth_reducer };