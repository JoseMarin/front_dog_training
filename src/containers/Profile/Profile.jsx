import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Pensando from "../../assets/Buenos_modales/perro-pensando.png";

const Profile = (props) => {

  let history = useHistory();

  if (props.credentials?.token) {
    return (
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div
          className="page-content page-container "
          id="page-content"
        >
          <div className="padding ">
            <div className="row container d-flex justify-content-center">
              <div className="col-ms-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-12 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-black">
                        <div className="m-b-25">
                          {" "}
                          <img
                            src={Pensando}
                            className="img-fluid rounded-circle"
                            alt="100x100"
                          />{" "}
                        </div>
                        <h4 className="f-w-600">
                          Welcome&nbsp; &nbsp; {props.credentials?.user.name}
                        </h4>
                      </div>
                    </div>
                    <div className="col-ms-9 text-center">
                      <div className="card-block">
                        <h3 className="m-b-20 p-b-5 b-b-default f-w-600 text-center">
                          Information
                        </h3>
                        <br/>
                        <div className="row">
                          <div className="col-xl-6">
                            <h4 className="m-b-20  f-w-600">Email</h4>
                            <h6 className="f-w-400">
                              {props.credentials?.user.email}
                            </h6>
                          <br/>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="m-b-20 f-w-600">City</h4>
                            <h6>{props.credentials?.user.city}</h6>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="m-b-20 f-w-600">
                             CREATE COUNT
                            </h4>
                            <h6 className="f-w-400">
                              {moment(props.credentials?.user.createdAt).format(
                                "LL"
                              )}
                            </h6>
                          </div>
                        </div>
                        <br/>
                        <h4 className="m-b-20 m-t-20 p-b-5 b-b-default f-w-600">
                          Settings
                        </h4>
                        <br/>
                        <div className="row">
                          <div className="col-sm-6">
                            <h4
                              className="m-b-10 f-w-600"
                              Style="cursor:pointer;"
                              onClick={() => history.push("/userpost")}
                            >
                              POSTS
                            </h4>
                          </div>
                          <div className="col-sm-6">
                            <h4
                              className="m-b-10 f-w-600"
                              Style="cursor:pointer;"
                              onClick={() => history.push("/updateuser")}
                            >
                              Update
                            </h4>
                          </div>
                        </div>
                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
        className="card  mb-3 rounded mx-auto d-block border-0 card fixed-top"
        Style="max-width: 540px;"
      >
        <div className="row g-0">
          <div className="col-md-4 m-auto">
            <img
              src={Pensando}
              className="img-fluid rounded-circle  z-depth-2"
              alt="100x100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">
                Welcome&nbsp; &nbsp; {props.credentials?.user.name}
              </h5>
              <p className="card-text text-center">
                Email {props.credentials?.user.email}{" "}
              </p>
              <p className="card-text text-center">
                City <div></div> {props.credentials?.user.city}
              </p>
              <p className="card-text text-center">
                CREATECOUNT <div></div>
                {moment(props.credentials?.user.createdAt).format("LL")}{" "}
                {/*Con 3 LLL te muestra la hora*/}
        {/* </p>
              <div className="text-center">
                <Link className="updateButton" to={"/userpost"}>
                  POSTS
                  {changeData()}
                </Link>
                &nbsp; &nbsp;
                <Link
                  className="buttonUpdateC"
                  onClick={() => history.push("/updateuser")}
                >
                  UPDATE
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* </div> */}
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
  data: state.data,
}))(Profile);
