/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ADD_POST } from "../../redux/types";
import moment from "moment";
import MakePost from "../../components/MakePost/MakePost";
import {
  faUser,
  faClock,
  faComment,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommonWall = (props) => {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {});

  const findPost = async () => {
    let token = props.credentials?.token;

    axios
      .get("http://localhost:5000/post", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        setUserPost(res.data);
        props.dispatch({ type: ADD_POST, payload: res?.data });
      })
      .catch((err) => {
        console.log("Err");
      });
  };

  const removePost = async (mjs) => {
    let token = props.credentials?.token;
    let user = props.credentials?.user;

    let body = {
      postId: mjs.id,
      userId: user.id
    };
    console.log('postId', body);

    let res = await axios.delete(
      "http://localhost:5000/post/deletepost",
      body,
      { headers: { authorization: "Bearer " + token } }
    );

    setUserPost(res.data);
    window.location.reload();
  };

  return (
    <div>
      <MakePost />
      {userPost ? (
        <div className="container-fluir">
          <div className="row justify-content-evenly row-cols-2 row-cols-md-2 g-4 mt-lg-5">
            <div className="row  mt-lg-5">
              <div className="">
                {[...userPost].reverse().map((mjs, index) => (
                  <div className="card border-dark bg-light p-3 mb-4 mt-lg-5">
                    <div className="card-body" key={index}>
                      <img
                        className="card-img-top"
                        src=".../100px180/"
                        alt="100x100"
                      />
                      <h5 className="card-title">{mjs.title}</h5>
                      <p className="card-text">{mjs.content}</p>
                      {/* <p className="card-text">User &nbsp; &nbsp; {mjs.name}</p> */}
                      <small class="text-muted">
                        <FontAwesomeIcon icon={faUser} /> &nbsp; {mjs.userName}{" "}
                        &nbsp; {mjs.lastName} &nbsp; &nbsp;
                      </small>{" "}
                      &nbsp;
                      <small class="text-muted">
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {moment(mjs.date).format("LLL")}
                      </small>{" "}
                      &nbsp; &nbsp;
                      <span className=" m-xxl-5">
                        <FontAwesomeIcon icon={faComment} /> COMMENT
                      </span>
                      &nbsp; &nbsp;
                      <span
                        className="updateButton"
                        onClick={() => removePost()}
                      >
                        <FontAwesomeIcon icon={faTrash} /> REMOVE
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MakePost />
      )}
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data,
}))(CommonWall);
