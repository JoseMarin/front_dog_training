import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ADD_POST } from "../../../redux/types";
import moment  from 'moment';

const Posts = (props) => {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPost = async () => {
    let token = props.credentials?.token;

    axios
      .get("http://localhost:5000/post", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        setUserPost(res.data);
        props.dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => {
        console.log("Err");
        // console.log(err.response.data);
      });
  };

  if (userPost[0]?.id) {
    return (
      <div className="return2 container">
      <table className="table table-bordered  table-hover border-0 align-items-center flex-column ">
        <thead  className="thead-dark border-1 ">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">User</th>
            <th scope="col">Last Name</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Post Id</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {userPost.map((mjs, index) => (
            <tr key={index}>
              <th scope="row">{mjs.id}</th>
              <td>{mjs.userName}</td>
              <td>{mjs.lastName}</td>
              <td>{mjs.title}</td>
              <td>{mjs.content}</td>
              <td>{mjs.id}</td>
              <td>{moment(mjs.date).format("LLL")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  } else {
    return (
      <div className="return">
        <h1>No tienes acceso</h1>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(Posts);
