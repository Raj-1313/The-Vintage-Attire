import React from 'react'
const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: null,
  };
  
  const AppReducer = (state = initialState,{type,payload}) => {
    // switch (type){
    //   case AUTH_SUCCESS:{
    //   return {...state, isAuth:true,isLoading:false,token:payload}
    // }
    // case AUTH_FAILURE:{
    //     return {...state, isError:true,isLoading:false}      
    //   }
    //   case AUTH_REQUEST:{
    //     return {...state, isLoading:true,isError:false}
    //   }
  
    //   case AUTHSIGNUP_SUCCESS:{
    //   return {...state,isLoading:false}
    // }
    // case AUTHSIGNUP_FAILURE:{
    //     return {...state, isError:true,isLoading:false}      
    //   }
    //   case AUTHSIGNUP_REQUEST:{
    //     return {...state, isLoading:true,isError:false}
    //   }
  
  
    //   default :{  
    //     return state;
    //   }
    // }
    return state
  };
  
  export default AppReducer ;