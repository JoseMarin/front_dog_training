/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { ADD_POST } from "../../redux/types";
import moment from "moment";
import MakePost from "../../components/MakePost/MakePost";

const CommonWall = (props) => {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPost = async () => {
    axios
      .get("http://localhost:5000/post")
      .then((res) => {
        setUserPost(res.data);
        props.dispatch({ type: ADD_POST, payload: res?.data });
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
          <div className="row justify-content-evenly row-cols-2 row-cols-md-2 g-4 mt-lg-5">
            <div className="row  mt-lg-5">
              <div className="">
                {userPost.map((mjs, index) => (
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
                        By &nbsp; {mjs.userName} &nbsp; {mjs.lastName}
                      </small>{" "}
                      &nbsp;
                      <small class="text-muted">
                        Date {moment(mjs.date).format("LLL")}
                      </small>
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
