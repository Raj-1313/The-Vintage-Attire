import axios from 'axios';
import { MEN_FAILURE, MEN_REQUEST, MEN_SUCCESS } from './App.actionTypes';

export const getMenData = (params)=>(dispatch)=>{
    dispatch({type:MEN_REQUEST})
return axios.get("https://vintage-attire-deploy.onrender.com/product/men",params)
.then(response => dispatch({type:MEN_SUCCESS,payload:response.data}))
.catch(error => dispatch({type:MEN_FAILURE}))
}

// export const getMenDatabySearch = (params)=>(dispatch)=>{
//     dispatch({type:MEN_REQUEST})
//     return axios.get("https://vintage-attire-server-new.onrender.com/product/men/filter",params)
//     .then(response => dispatch({type:MEN_SUCCESS,payload:response.data}))
//     .catch(error => dispatch({type:MEN_FAILURE}))
// }

export const getWomenData = ()=>(dispatch)=>{

}

export const getKidsData = ()=>(dispatch)=>{

}

export const getHomeData = ()=>(dispatch)=>{

}
