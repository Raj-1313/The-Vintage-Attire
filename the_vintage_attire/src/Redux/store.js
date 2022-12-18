import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Auth_reducer } from './AuthReducer/Auth_Reducer'
import AppReducer from './AppReducer/App.reducer';
import AdminReducer from './AdminReducer/Admin.Reducer';
import { reducer as CartReducer } from './cartReducer/Cart.reducer'

const rootReducer= combineReducers({
AppReducer,
Auth_reducer,
AdminReducer,
CartReducer
})


const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };
