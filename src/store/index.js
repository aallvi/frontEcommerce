import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import AppReducer from './reducers/app.reducer';
import LoginReducer from './reducers/login.reducers'


const RootReducer = combineReducers({
    login: LoginReducer,
    app: AppReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))