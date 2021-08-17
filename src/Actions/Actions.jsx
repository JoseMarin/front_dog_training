import axios from "axios";
import { GET_POST } from "../redux/types";

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
        payload: res?.data
      });
    })
    .catch((err) => {
      // notification.warning({message:'Atencion.',description: JSON.stringify(err.response.data.message)});
      console.log("Err");
    });
};
