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
        setUsers(res.data.results);
        console.log("users", res);
        // props.dispatch({ type: ADD_POST, payload: res.data });
      })
      .catch((err) => {
        console.log("Err");
        // console.log(err.response.data);
      });
  };

  if (users?.id) {
    return (
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
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
          </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <h1>Cargando Datos...</h1>
      </div>
    );
  }
};

export default connect((state)=>({
  credentials: state.credentials,
}))(AllUsers);

//         <div className="card-body" key={index}>
//           <img className="card-img-top" src=".../100px180/" alt="100x100" />
//           <h5 className="card-title">{user.name}</h5>
//           <p className="card-text">{user.email}</p>
//           <p className="card-text">{user.city}</p>
//         </div>{/*
//       ))}
//     </div>
//   </div> */}
//     <div>
//     <div className="card mjs" Style="width: 18rem;">
//       {users.map((user, index) => (


