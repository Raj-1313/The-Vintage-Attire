import { ADMIN_REQUEST, ADMIN_FAILURE,ADMIN_SUCCESS } from "./Admin.actionTypes";
import axios from "axios";

export const getAdminProduct = () =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.get("https://vintage-attire-deploy.onrender.com/product/admin")   
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const patchAdminProduct = (payload) =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.patch("https://vintage-attire-deploy.onrender.com/product/admin",payload)   
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}











export const getAdminCart = () =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.get("https://vintage-attire-deploy.onrender.com/product/admin/cart")   
        dispatch({type:ADMIN_SUCCESS})
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
export const getAdminUser = () =>async (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    try{
        let data= await axios.get("https://vintage-attire-deploy.onrender.com/product/admin/user")   
        return data.data
    }catch(e) {
    dispatch({type:ADMIN_FAILURE})
}
}
