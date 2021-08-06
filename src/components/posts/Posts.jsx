import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ADD_POST } from "../../redux/types";
// import moment  from 'moment';

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
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="row">
            {userPost.map((mjs, index) => (
              <div className="card ">
                <div className="card-body" key={index}>
                  <img
                    className="card-img-top"
                    src=".../100px180/"
                    alt="100x100"
                  />
                  <h4 className="card-title">Title {mjs.title}</h4>
                  <p className="card-text">Post {mjs.content}</p>
                  <p className="card-text">PostId {mjs.id}</p>
                  <small class="text-muted">
                    User &nbsp; {mjs.userName} &nbsp; &nbsp; Id &nbsp;{" "}
                    {mjs.userId}
                  </small>
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
  post: state.post,
}))(Posts);
