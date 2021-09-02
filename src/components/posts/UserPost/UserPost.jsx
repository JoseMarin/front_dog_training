/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { faUser,faClock,faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../Spinner/Spinner";
import Swal from "sweetalert2";

//ACTIONS OF RDX
import { removePostAction, editPost, getPostAction } from "../../../Actions/PostActions";

const userPost = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

   //Access to the states
   const userPost = useSelector((state) => state.data.post);

   useEffect(() => {
    //Consult the API
    const findPost = (props) => dispatch(getPostAction(props));
    findPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmRemove = (body, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        //Take it into action
        dispatch(removePostAction(body, userId));
      }
    });
  };

  const postToEdit = (post) => {
    dispatch(editPost(post));
    history.push("/editPost");
  };
  if (userPost[0]?.id) {
    return (
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4">
          {[...userPost].reverse().map((mjs, index) => (
            <div className="card offset-md-1 cartaUser" Style="min-width: 18rem; width: 33rem;">
              <img
                className="card-img-top"
                src=".././100px180/"
                alt="100x100"
              />
              <div className="card-body" key={index}>
                <h2 className="card-title">Title {mjs.title}</h2>
                <hr/>
                <h4 className="card-text">Post {mjs.content}</h4>
                <hr/>
                <small>
                  <FontAwesomeIcon icon={faUser} /> &nbsp; {mjs.userName}
                </small>
                &nbsp; &nbsp; &nbsp;
                <small>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  {moment(mjs.date).format("LLL")}
                </small>
                <Link
                  Style="cursor:pointer; color:black;"
                  className=" m-xxl-5"
                  onClick={() => postToEdit(userPost)}
                >
                  <FontAwesomeIcon icon={faEdit} /> EDIT
                </Link>
                <span
                  Style="cursor:pointer;"
                  onClick={() => confirmRemove(mjs, mjs.userId)}
                  className="updateButton"
                >
                  <FontAwesomeIcon icon={faTrash} /> Remove
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="return">
        <Spinner />
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data,
}))(userPost);
