/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { ADD_POST, GET_POST, REMOVE_POST } from "../../redux/types";
import moment from "moment";
import MakePost from "../../components/MakePost/MakePost";
import {
  faUser,
  faClock,
  faComment,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popconfirm, notification } from "antd";

const CommonWall = (props) => {
  let history = useHistory();

  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {});

  // const post = useSelector( store => store.post );
  // const userPost = useSelector(store => store.data);


  //Cambio el estado del hook comment a true
  // const doComment = () => {
  //   setComment(true);
  // };

  const findPost = async () => {
    let token = props.credentials?.token;

    axios
      .get("http://localhost:5000/post", {
        headers: { authorization: "Bearer " + token },
      })
      .then((res) => {
        setUserPost(res.data);
        props.dispatch({ type: GET_POST, payload: res?.data });
      })
      .catch((err) => {
        // notification.error({ message: "Action canceled.", style: {top: 76,}, description: "Action canceled.",});
        // notification.warning({message:'Atencion.',description: JSON.stringify(err.response.data.message)});
        console.log("Err");
      });
  };

  const removePost = async (mjs) => {
    let token = props.credentials?.token;
    let user = props.credentials?.user;

    let body = {
      postId: mjs.id,
      userId: user.id,
    };
    // Envío por axios
    axios.put("http://localhost:5000/post/deletepost", body, {
      headers: { authorization: "Bearer " + token },
    });
    findPost()
      .then((res) => {
        setUserPost(res.data);
        props.dispatch({ type: REMOVE_POST, payload: res?.data });
        findPost();
      })
      .catch((err) => {
        // console.log(err.response.data);
        // notification.error({message: "Action canceled", style: { top: 76 }, });
        console.log("Err");
      });
  };

  const doComment = (mjs) => {
    props.dispatch({type: ADD_POST, payload: mjs});

    history.push('/comments');
  }

  function confirm(e) {
    console.log(e);
    notification.success({
      message: "Post was removed.",
      style: { top: 76 },
      description: "Post was removed.",
    });
  }

  function cancel(e) {
    console.log(e);
    notification.error({
      message: "Action canceled.",
      style: { top: 76 },
      description: "Action canceled.",
    });
  }

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
                      <span
                        className=" m-xxl-5"
                        onClick={() => doComment(mjs)}
                      >
                        <FontAwesomeIcon icon={faComment} /> COMMENT
                      </span>
                      &nbsp; &nbsp;
                      <Popconfirm
                        title="Are you sure to delete this post?"
                        onConfirm={() => removePost(mjs, confirm)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <span Style="cursor:pointer;" className="updateButton">
                          <FontAwesomeIcon icon={faTrash} /> REMOVE
                        </span>
                      </Popconfirm>
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
