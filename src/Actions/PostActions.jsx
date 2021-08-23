import {
  ADD_POST_SUCCE, ADD_POST_ERROR,
  GET_POST,
  // REMOVE_POST,
  // ADD_COMMENT,
  // GET_POST_ERROR,
  // REMOVE_POST_ERROR,
  // REMOVE_POST_SUCCE,
  // EDIT_POST_ERROR,
  // GET_POST_EDIT,
  // EDIT_POST_SUCCE,
} from "../redux/types";
import axios from "axios";
import { notification } from "antd";

//Create new products, and we call with useDispatch
export function createPostAction(body) {
  return async (dispatch) => {
      dispatch( addPostSucce() );

      axios
      .post("http://localhost:5000/post", body, {
        headers: { authorization: "Bearer " },
      })
      .then((res) => {
        // dispatch({ type: ADD_POST_SUCCE, payload: res?.data });
        dispatch(addPostSucce(body)); //This is to state
        // window.location.reload();
        notification.success({
          message: "Post was add.",
          style: { top: 76 },
          description: "Post was add.",
        });
        // history.push("/commonwall");
      })
      .catch((err) => {
        console.log("Err");
        // props.dispatch(addPostError(true));
        // dispatch({ type: ADD_POST_ERROR, payload: err?.data });
        //But if there is an error, change the state
        dispatch(addPostError(true));
        //Alert error
        notification.error({
          message: "Error",
          style: { top: 76 },
          description: "Action canceled.",
        });
        // console.log(err.response.data);
      });
  };
}

//If the product is saved in the database and modificate the state
const addPostSucce = (post) => ({
  type: ADD_POST_SUCCE,
  payload: post,
});

//If there was an error. state take the state of error
const addPostError = (state) => ({
  type: ADD_POST_ERROR,
  payload: state,
});
// Function to download the products from the data base
// export function getProductsAction() {
//   //Note getProductsAction, run the function wownloadProducts
//   return async (dispatch) => {
//     dispatch(downloadProducts());

//     try {
//       const aswer = await clientAxios.get("/products");
//       dispatch(downloadProductsSucce(aswer.data)); //Put dispatch if the call is succe
//     } catch (error) {
//       console.log(error);
//       dispatch(downloadProductsError());
//     }
//   };
// }

// actions
export const findPost = (props) => async (dispatch, getState) => {
  let token = props.credentials?.token;
  axios
    .get("http://localhost:5000/post", {
      headers: { authorization: "Bearer " + token },
    })
    .then((res) => {
      dispatch({
        type: GET_POST,
        payload: res?.data,
      });
    })
    .catch((err) => {
      // notification.warning({message:'Atencion.',description: JSON.stringify(err.response.data.message)});
      console.log("Err");
    });
};
