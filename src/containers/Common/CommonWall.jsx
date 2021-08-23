/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router";
import axios from "axios";
import { GET_POST, REMOVE_POST_SUCCE } from "../../redux/types";
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
// import { ADD_COMMENT } from "../../redux/types";

const CommonWall = (props) => {
  // let history = useHistory();

  // const [userPost, setHookPrueba] = useState([]);
  const [hookPrueba, setHookPrueba] = useState(props.data.post);

  useEffect(() => {
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // console.log(props.data, "Hola soy RDX");
  });

  // const post = useSelector( state => state.post );

  // Cambio el estado del hook comment a true
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
        setHookPrueba(res.data);
        props.dispatch({ type: GET_POST, payload: res?.data });
      })
      .catch((err) => {
        notification.error({
          message: "Action canceled.",
          style: { top: 76 },
          description: "Action canceled.",
        });
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
        props.dispatch({ type: REMOVE_POST_SUCCE, payload: res?.data });
        setHookPrueba(res.data);
        notification.success({
          message: "Post was removed.",
          style: { top: 76 },
          description: "Post was removed.",
        });
        findPost();
        setTimeout(() => {
          window.location.reload();
        }, 950);
      })
      .catch((err) => {
        // console.log(err.response.data);
        console.log("Err");
      });
  };

  // const doComment = (mjs) => {
  //   props.dispatch({ type: ADD_COMMENT, payload: mjs });

  //   history.push("/comments");
  // };

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
      {hookPrueba ? (
        <div className="container-fluir">
          <div className="row justify-content-evenly row-cols-2 row-cols-md-2 g-4 mt-lg-5">
            <div className="row  mt-lg-5">
              <div className="">
                {[...hookPrueba].reverse().map((mjs, index) => (
                  <div
                    className="card border-dark bg-light p-3 mb-4 mt-lg-5"
                    key={index}
                  >
                    <div className="card-body">
                      <img
                        className="card-img-top"
                        src=".../100px180/"
                        alt="100x100"
                      />
                      <h5 className="card-title">{mjs.title}</h5>
                      <p className="card-text">{mjs.content}</p>
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faUser} /> &nbsp; {mjs.userName}{" "}
                        &nbsp; {mjs.lastName} &nbsp; &nbsp;
                      </small>{" "}
                      &nbsp;
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {moment(mjs.date).format("LLL")}
                      </small>{" "}
                      &nbsp; &nbsp;
                      <span
                        Style="cursor:pointer;"
                        className=" m-xxl-5"
                        // onClick={() => doComment(mjs)}
                      >
                        <FontAwesomeIcon icon={faComment} /> COMMENT
                      </span>
                      &nbsp; &nbsp;
                      <Popconfirm
                        title="Are you sure to delete this post?"
                        onConfirm={() => removePost(mjs)}
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
        <div>No hay posts nuevos...</div>
      )}
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(CommonWall);
