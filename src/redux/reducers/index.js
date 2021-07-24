import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import infoUser from './infoUser-reducer';


const rootReducer = combineReducers({
    // aquí importaremos todos los reducers:
    credentials,
    infoUser,
});

export default rootReducer;