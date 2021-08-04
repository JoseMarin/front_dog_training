import React from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
// import spinner from "../../assets/spinner2.gif";
import moment from "moment";
import Pensando from '../../assets/Buenos_modales/perro-pensando.png';


const Profile = (props) => {
  let history = useHistory();

  if (props.credentials?.token) {
    return (
      <div
        class="card  mb-3 rounded mx-auto d-block border-0 card"
        Style="max-width: 540px;"
      >
        <div class="row g-0">
          <div class="col-md-4 m-auto">
            <img src={Pensando} class="img-fluid rounded-circle  z-depth-2" alt="100x100"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-center">
                Welcome&nbsp; &nbsp; {props.credentials?.user.name}
              </h5>
              <p class="card-text text-center">
                Email {props.credentials?.user.email}{" "}
              </p>
              <p class="card-text text-center">
                City <div></div> {props.credentials?.user.city}
              </p>
              <p class="card-text text-center">
                CREATECOUNT <div></div>
                {moment(props.credentials?.user.createdAt).format("LL")}{" "}
                {/*Con 3 LLL te muestra la hora*/}
              </p>
              <div className="text-center">
                <Link className="updateButton" to={"/allorders"}>
                  POSTS
                </Link>
                &nbsp; &nbsp;
                <Link className="updateButton" to={"/allusers"}>
                  USERS{" "}
                </Link>
                <Link
                  className="buttonUpdateC"
                  onClick={() => history.push("/updateuser")}
                >
                  UPDATE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      history.push("/");
    }, 250);

    return (
      <div className="spinnerContainer">
        <div className="spinnerC">
          <img src={{}} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  infoUser: state.infoUser,
}))(Profile);
