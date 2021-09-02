import React, { useEffect } from "react";
import moment  from 'moment';

//ACTIONS OF RDX
import { connect, useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../../../Actions/PostActions";

const Posts = () => {
  const dispatch = useDispatch();

   //Access to the states
   const userPost = useSelector((state) => state.data.post);

   useEffect(() => {
    //Consult the API
    const findPost = (props) => dispatch(getPostAction(props));
    findPost();
  }, [dispatch]);

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
          {[...userPost].reverse().map((mjs, index) => (
            <tr key={index}>
              <th scope="row">{mjs.userId}</th>
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
  data: state.data,
}))(Posts);
