/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ADD_POST } from "../../../redux/types";
import moment from "moment";
import { faUser, faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const userPost = (props) => {
  const [userPost, setUserPost] = useState([]);

  const [post] = useState({
    user: props.credentials?.user,
  });

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPost = async () => {
    let token = props.credentials?.token;

    let user = post.user;

    let body = {
      userId: user.id,
    };

    axios
      .post("https://jaug-dog-training.herokuapp.com/post/userpost", body, {
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
      <div className="container">
        <div className="row justify-content-evenly row-cols-2 row-cols-md-2 g-4 mt-lg-5">
          <div className="row  mt-lg-5">
            {[...userPost].reverse().map((mjs, index) => (
              <div className="card border-dark bg-light p-3 mb-4 mt-lg-5">
                <div className="card-body" key={index}>
                  <img
                    className="card-img-top"
                    src=".../100px180/"
                    alt="100x100"
                  />
                  <h4 className="card-title">Title {mjs.title}</h4>
                  <p className="card-text">Post {mjs.content}</p>
                  <small class="text-muted">
                    <FontAwesomeIcon icon={faUser} /> &nbsp; {mjs.userName}
                  </small>
                  &nbsp; &nbsp;
                  <small class="text-muted">
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {moment(mjs.date).format("LLL")}
                  </small>
                  &nbsp; &nbsp;
                  <span Style="cursor:pointer;" className="updateButton">
                    <FontAwesomeIcon icon={faTrash} /> Edit
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="return">
        <h1>No tienes posts</h1>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data,
}))(userPost);
