import {
  ADD_POST,
  ADD_POST_SUCCE,
  ADD_POST_ERROR,
  GET_POST,
  GET_POST_SUCCE,
  GET_POST_ERROR,
  // ADD_COMMENT,
  // REMOVE_POST,
  // REMOVE_POST_SUCCE,
  // REMOVE_POST_ERROR,
  // GET_POST_EDIT,
  // EDIT_POST_SUCCE,
  // EDIT_POST_ERROR,
} from "../redux/types";
import axios from "axios";
import Swal from "sweetalert2";

// Create new products, and we call with useDispatch
export function createPostAction(body) {
  return async (dispatch) => {
    dispatch(addPost());
    axios
      .post("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " },
      })
      .then((res) => {
        dispatch(addPostSucce(body) ); //This is to state
        // window.location.reload();
        //Alert
        Swal.fire("Correct", "Post was add.", "success");
        // history.push("/commonwall");
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(addPostError(true) );
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Was a mistake try again.",
          // getPostAction: getPostAction()
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

// Function to download the products from the data base
export function getPostAction() {
  //Note getPostAction, run the function wownloadProducts
  return async (dispatch) => {
    dispatch(downloadPost());

    await axios
      .post("http://localhost:5000/post", {
        headers: { authorization: "Bearer " },
      })
      .then((res) => {
        dispatch(downloadPostSucce()); //Put dispatch if the call is succe
        // window.location.reload();
        // history.push("/commonwall");
      })
      .catch((err) => {
        console.log(err);
        //But if there is an error, change the state
        dispatch(downloadPostError(true));
        //Alert error
        Swal.fire({
          icon: "error",
          title: "Was a mistake",
          text: "Was a mistake try again.",
        });
      });
  };
}

const downloadPost = () => ({
  type: GET_POST,
  payload: true,
});

const downloadPostSucce = () => ({
  type: GET_POST_SUCCE,
  payload: true
});

const downloadPostError = () => ({
  type: GET_POST_ERROR,
  payload: true
});


// actions
// export const findPost = (props) => async (dispatch, getState) => {
//   let token = props.credentials?.token;
//   axios
//     .get("http://localhost:5000/post", {
//       headers: { authorization: "Bearer " + token },
//     })
//     .then((res) => {
//       dispatch({
//         type: GET_POST,
//         payload: res?.data,
//       });
//     })
//     .catch((err) => {
//       // notification.warning({message:'Atencion.',description: JSON.stringify(err.response.data.message)});
//       console.log("Err");
//     });
// };
