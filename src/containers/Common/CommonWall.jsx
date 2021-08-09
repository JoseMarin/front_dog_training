/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import moment  from 'moment';
import MakePost from "../../components/MakePost/MakePost";

const CommonWall = () => {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

const findPost = async () => {
  axios
    .get("http://localhost:5000/post")
    .then((res) => {
      setUserPost(res.data);
      // props.dispatch({ type: ADD_POST, payload: res.data });
      console.log("userPosts", res);
    })
    .catch((err) => {
      console.log("Err");
    });
};

  return (
    <div>
      <MakePost />
      {userPost ? (
        <div className="container">
          <div className="card mjs mt-3">
            {userPost.map((mjs, index) => (
              <div className="card-body" key={index}>
                <img
                  className="card-img-top"
                  src=".../100px180/"
                  alt="100x100"
                />
                <h5 className="card-title">{mjs.title}</h5>
                <p className="card-text">{mjs.content}</p>
                <p className="card-text">User &nbsp; &nbsp; {mjs.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <MakePost />
      )}
    </div>
  );
  // } else {
  //   return (
  //     <div>
  //       <MakePost />
  //     </div>
  //   );
  // }
};

export default connect((state) => ({
  credentials: state.credentials,
  post: state.post,
}))(CommonWall);
