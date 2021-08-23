import {
  ADD_POST_SUCCE,
  GET_POST,
  REMOVE_POST,
  ADD_COMMENT,
  ADD_POST_ERROR,
  GET_POST_ERROR,
  REMOVE_POST_ERROR,
  REMOVE_POST_SUCCE,
  EDIT_POST_ERROR,
  GET_POST_EDIT,
  EDIT_POST_SUCCE
} from "../types";

const initialState = {
  post: [],
  error: null,
  loading: false,
  removepost: null,
  editpost: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    //Ejemplo de añadido de datos

    case ADD_POST_SUCCE:
      return {
        ...state,
        loading: false,
        post: [ ...state.post, action.payload ]
      };


    case ADD_POST_ERROR:
    case GET_POST_ERROR:
    case REMOVE_POST_ERROR:
    case EDIT_POST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case ADD_COMMENT:
      return { ...state, post: action.payload };

    case GET_POST:
      return { ...state, post: action.payload };

    case REMOVE_POST:
      return { ...state, post: action.payload };

    case REMOVE_POST_SUCCE:
      return {
        ...state,
        post: state.post.filter((post) => post.id !== state.removepost),
        removepost: null,
      };

    // case EDIT_POST:
    //   return {...state,post: action.payload};

    case GET_POST_EDIT:
      return { ...state, editpost: action.payload };

    case EDIT_POST_SUCCE:
      return {
        ...state,
        editpost: null,
        post: state.post.map((posts) =>
          posts.id === action.payload.id
            ? (posts = action.payload)
            : posts
        ),
      };

    default:
      return state;
  }
};

export default dataReducer;
