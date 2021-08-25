import {
  ADD_POST,
  ADD_POST_SUCCE,
  ADD_POST_ERROR,
  GET_POST,
  GET_POST_SUCCE,
  GET_POST_ERROR,
  REMOVE_POST,
  REMOVE_POST_SUCCE,
  REMOVE_POST_ERROR,
  // ADD_COMMENT,
  // GET_POST_EDIT,
  // EDIT_POST_SUCCE,
  // EDIT_POST_ERROR,
} from "../redux/types";
import axios from "axios";
import Swal from "sweetalert2";

export function createPostAction(body) {
  return async (dispatch) => {
    dispatch(addPost() );
    await axios
      .post("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " },
      })
      .then((res) => {
        dispatch(addPostSucce(body) ); //This is to state
        //Alert
        Swal.fire("Correct", "The post was added successfully.", "success");
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(addPostError(true) );
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
}

const addPost = () => ({
  type: ADD_POST,
  payload: true,
});
//If the product is saved in the database and modificate the state
const addPostSucce = body => ({
  type: ADD_POST_SUCCE,
  payload: body,
});

//If there was an error. state take the state of error
const addPostError = state => ({
  type: ADD_POST_ERROR,
  payload: state,
});

export function getPostAction(props) {
  let token = props;
  //Note getPostAction, run the function wownloadProducts
  return async (dispatch) => {
    dispatch(downloadPost() );

    await axios
      .get("http://localhost:5000/post", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        dispatch(downloadPostSucce(res.data) ); //Put dispatch if the call is succe
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(downloadPostError() );
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Try again.",
        });
      });
  };
}

const downloadPost = () => ({
  type: GET_POST,
  payload: true,
});

const downloadPostSucce = Userposts => ({
  type: GET_POST_SUCCE,
  payload: Userposts,
});

const downloadPostError = () => ({
  type: GET_POST_ERROR,
  payload: true,
});

export function removePostAction(postId, userId) {
  return async (dispatch) => {
    //Here we collect the identifiers
    dispatch(removePost(postId, userId) );

    await axios
      .put("http://localhost:5000/post/deletepost", { postId, userId })
      .then((res) => {
        //If it is eliminated show alert
        dispatch(removeSucce(postId, userId) );
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      })
      .catch((err) => {
        // console.log(err.response.data);
        console.log(err);
        dispatch(removeError() );
      });
  };
}

const removePost = (postId, userId) => ({
  type: REMOVE_POST,
  payload: ({postId, userId})
});

const removeSucce = (postId, userId) => ({
  type: REMOVE_POST_SUCCE,
  payload: ({postId, userId})
});

const removeError = () => ({
  type: REMOVE_POST_ERROR,
  payload: true,
});
