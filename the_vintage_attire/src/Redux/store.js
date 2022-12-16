import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Auth_reducer } from './AuthReducer/Auth_Reducer'
import AppReducer from './AppReducer/App.reducer';

const rootReducer= combineReducers({
    Auth_reducer,
    AppReducer
})


const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export { store };
