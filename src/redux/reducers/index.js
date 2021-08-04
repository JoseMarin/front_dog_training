import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import data from './data-reducer';


const rootReducer = combineReducers({
    // aquí importaremos todos los reducers:
    credentials,
    data
});

export default rootReducer;