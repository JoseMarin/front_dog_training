import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

const Admin = (props) => {

  if (props.credentials?.user.isAdmin === true) {
    return (
      <div className="admin">
        <div className="nombre"></div>
        <div className="users">
          <div className="userContent">
            <h2>Welcome&nbsp; &nbsp; {props.credentials?.user.name}</h2>
            <p>EMAIL : {props.credentials?.user.email} </p>
            <p>CITY : {props.credentials?.user.city}</p>
            <p>
              CREATECOUNT :{" "}
              {moment(props.credentials?.user.createdAt).format("LL")}{" "}{/*Con 3 LLL te muestra la hora*/}
            </p>

            <div className="box2">
              <Link to={"/updateuser"} className="updateButton">UPDATE</Link>
            </div>
          </div>
        </div>

        <div className="orders">
          <div className="orderContent">
            <h2 className="titleUpdate">Access</h2>
            <div className="box2">
                <Link className="updateButton" to={"/allorders"}>ORDERS</Link>
                <Link className="updateButton" to={"/allusers"}>USERS </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (

        <div class="card  mb-3 rounded mx-auto d-block border-0  card" Style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-center">Welcome&nbsp; &nbsp; {props.credentials?.user.name}</h5>
              <p class="card-text">EMAIL : {props.credentials?.user.email} </p>
              <p class="card-text">{props.credentials?.user.city}</p>
              <p class="card-text">
              CREATECOUNT :{" "}
              {moment(props.credentials?.user.createdAt).format("LL")}{" "}{/*Con 3 LLL te muestra la hora*/}
            </p>
            </div>
          </div>
        </div>
      </div>

    )}
};

export default connect((state) => ({
  credentials: state.credentials,
  infoUser: state.infoUser,
}))(Admin);