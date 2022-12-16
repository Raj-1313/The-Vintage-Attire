import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Auth_reducer } from './AuthReducer/Auth_Reducer'
import AppReducer from './AppReducer/App.reducer';
import AdminReducer from './AdminReducer/Admin.Reducer';

const rootReducer= combineReducers({
AppReducer,
Auth_reducer,
AdminReducer
})


const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };
