import { findTotalSum } from './Cart.action'
import * as types from './Cart.actionTypes'

const initialState = {
    isLoading:false,
    isError:false,
    cartLength:0,
    isButtonLoading:false,
    isButtonError:false,
    cartData:[]
}

export const reducer = (state=initialState,{type,payload}) =>{
        switch(type){
            case types.CART_REQUEST:{
                return {
                    ...state,
                    isLoading:true
                }
            }
            case types.CART_SUCCESS:{

                return {
                    ...state,
                    isLoading:false,
                    cartData:payload,
                    cartLength:payload.length,
                    subTotalAmt:findTotalSum(payload)
                }
            }
            case types.CART_FAILURE:{
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }
            }
            case types.BTN_INC_REQUEST:{
                return {
                    ...state,
                    isButtonLoading:true
                }
            }
            case types.BTN_INC_SUCCESS:{

                return {
                    ...state,
                    isButtonLoading:false,
                    cartData:payload,
                    cartLength:payload.length,
                    subTotalAmt:findTotalSum(payload)
                }
            }
            case types.BTN_INC_FAILURE:{
                return {
                    ...state,
                    isButtonLoading:false,
                    isButtonError:true
                }
            }
            default :{
                return state
            }
        }
}

