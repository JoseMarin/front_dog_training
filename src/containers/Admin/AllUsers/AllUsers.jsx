import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

const AllUsers = (props) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    findAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {});

  const findAllUsers = async () => {
    let token = props.credentials?.token;

    axios
      .get("https://jaug-dog-training.herokuapp.com/users", {
        headers: { authorization: "Bearer " + token },
      })

      .then((res) => {
        setUsers(res.data);
        console.log("users", res);
        // props.dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => {
        console.log("Err");
        // console.log(err.response.data);
      });
  };

  if (users[0]?.id) {
    return (
      <div className="return2 container">
        <table className="table table-bordered table-hover border-0 align-items-center flex-column ">
          <thead className="thead-dark border-1 ">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="return">
        <h1>Cargando Datos...</h1>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(AllUsers);
