import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Auth_reducer } from './AuthReducer/Auth_Reducer'


// const rootReducer= combineReducers({
//     Auth_reducer,

// })


const store = legacy_createStore(Auth_reducer,applyMiddleware(thunk));

export { store };
