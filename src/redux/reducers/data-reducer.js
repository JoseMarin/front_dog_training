import { ADD_POST, GET_POST, REMOVE_POST, ADD_COMMENT } from "../types";

const initialState = {
  post: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    //Ejemplo de añadido de datos
    case ADD_POST:
      return { ...state, post: action.payload };

    case ADD_COMMENT:
      return { ...state, post: action.payload };

    case GET_POST:
      return action.payload;

    case REMOVE_POST:
      return { ...state, post: action.payload };

    // case EDIT_POST:
    //   return {...state,post: action.payload};

    default:
      return state;
  }
};

export default dataReducer;
