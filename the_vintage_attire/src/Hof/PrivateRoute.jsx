import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
const PrivateRoute = ({children}) => {
const isAuth = useSelector(store=>store.Auth_reducer.isAuth);
if(!isAuth){
    return <Navigate to={'/'}/> ;
}
    return children;

}

export default PrivateRoute