import { ADD_POST, GET_POST } from "../types";

const initialState = {
  post: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return action.payload;

    case GET_POST:
      return action.payload;

    default:
      return state;
  }
};

export default dataReducer;