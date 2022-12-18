import axios from 'axios';
import { HOME_FAILURE, HOME_REQUEST, HOME_SUCCESS, KIDS_FAILURE, KIDS_REQUEST, KIDS_SUCCESS, MEN_FAILURE, MEN_REQUEST, MEN_SUCCESS, WOMEN_FAILURE, WOMEN_REQUEST, WOMEN_SUCCESS } from './App.actionTypes';

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

export const getWomenData = (params)=>(dispatch)=>{
    dispatch({type:WOMEN_REQUEST})
    return axios.get("https://vintage-attire-deploy.onrender.com/product/women",params)
    .then(response => dispatch({type:WOMEN_SUCCESS,payload:response.data}))
    .catch(error => dispatch({type:WOMEN_FAILURE}))
}

export const getKidsData = (params)=>(dispatch)=>{
    dispatch({type:KIDS_REQUEST})
    return axios.get("https://vintage-attire-deploy.onrender.com/product/kids",params)
    .then(response => dispatch({type:KIDS_SUCCESS,payload:response.data}))
    .catch(error => dispatch({type:KIDS_FAILURE}))
}

export const getHomeData = (params)=>(dispatch)=>{
    dispatch({type:HOME_REQUEST})
    return axios.get("https://vintage-attire-deploy.onrender.com/product/home",params)
    .then(response => dispatch({type:HOME_SUCCESS,payload:response.data}))
    .catch(error => dispatch({type:HOME_FAILURE}))
}
