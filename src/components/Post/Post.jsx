import React from "react";
import {
  faUser,
  faClock,
  faComment,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Swal from "sweetalert2";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removePostAction } from "../../Actions/PostActions";

const Post = ({ post }) => {
  const { title, content, lastName, date, userName, id, userId } = post;
  //   console.log('postIddddd--->',post, 'userId ---->',userId)

  const dispatch = useDispatch();

  const confirmRemove = (body, userId) => {
    Swal.fire({
      title: "¿Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        //Take it into action
        dispatch(removePostAction(body, userId));
      }
    });
  };

  return (
    <div>
      <div className="container-fluir">
        <div className="row justify-content-evenly row-cols-2 row-cols-md-2 g-4 mt-lg-5">
          <div className="row  mt-lg-5">
            <div className="">
              <div className="card border-dark bg-light p-3 mb-4 mt-lg-5">
                <div className="card-body">
                  <img
                    className="card-img-top"
                    src=".../100px180/"
                    alt="100x100"
                  />
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{content}</p>
                  <small className="text-muted">
                    <FontAwesomeIcon icon={faUser} /> &nbsp; {userName} &nbsp;{" "}
                    {lastName} &nbsp; &nbsp;
                  </small>{" "}
                  &nbsp;
                  <small className="text-muted">
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {moment(date).format("LLL")}
                  </small>{" "}
                  &nbsp; &nbsp;
                  <span
                    Style="cursor:pointer;"
                    className=" m-xxl-5"
                    // onClick={() => confirmRemove(id)}
                  >
                    <FontAwesomeIcon icon={faComment} /> COMMENT
                  </span>
                  &nbsp; &nbsp;
                  <Link
                    Style="cursor:pointer; color:black;"
                    className=" m-xxl-5"
                    //   onClick={() => doComment(id)}
                  >
                    <FontAwesomeIcon icon={faEdit} /> EDIT
                  </Link>
                  &nbsp; &nbsp;
                  <span
                    Style="cursor:pointer;"
                    onClick={() => confirmRemove(id, userId)}
                    className="updateButton"
                  >
                    <FontAwesomeIcon icon={faTrash} /> REMOVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(Post);
