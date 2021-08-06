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
      .get("http://localhost:5000/users", {
        headers: { authorization: "Bearer " + token },
      })

      .then((res) => {
        setUsers(res);
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
      <div className="return">
      <h1>Hola</h1>
      <table className="table table-dark mjs">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
          <tr key={index}>
            <th scope="row">{user.data.id}</th>
            <td>{user.data.name}</td>
            <td>{user.data.lastName}</td>
            <td>{user.data.email}</td>
            <td>{user.data.city}</td>
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

export default connect((state)=>({
  credentials: state.credentials,
}))(AllUsers);