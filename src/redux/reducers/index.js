import { combineReducers } from "redux"
import loggedReducer from './isLogged';
import floorsReducer from "./floors";

const allReducers = combineReducers({
    auth: loggedReducer,
    floorsReducer
})
export default allReducers


