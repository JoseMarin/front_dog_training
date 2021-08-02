import React from "react";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types";
import { useHistory } from "react-router-dom";
import Training from '../Training/Training';

// import logo from "../../assets/logo.png";

const Header2 = (props) => {
  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
    history.push("/");
  };
  const llevame = () => {
    history.push("/aboutus");
  };

  if (props.credentials.user?.name) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top header">
        <div className="container-fluid">
            <img onClick={() => history.push("/")} className="logoHeader" src={{}} alt="logo" height="78em" width="76"/>
          <button
            className="navbar-toggler burguer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Button path="/commonwall" className="header"  destination="COMMON WALL"/>
              </li>
              <li className="nav-item">
                <Training />
              </li>
              <li className="nav-item">
                <Button path="/contacus" destination="CONTAC US"/>
              </li>

            </ul>
                <Button path="/profile" destination={props.credentials?.user.name}/>
                <div className="linkLogout" onClick={() => logOut()}>LOGOUT</div>
          </div>
        </div>
      </nav>
    );
  } else {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top header" Style="border: none;">
        <div className="container-fluid">
             <img onClick={() => history.push("/")} className="logoHeader" src={{}} alt="logo" height="78em" width="76"/>
          <button
            className="navbar-toggler burguer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Button path="/aboutus" destination="ABOUT US" onClick={() => llevame()} />
              </li>
              <li><a href="{}"><div id="google_translate_element"></div></a></li>
              <li className="nav-item">
                <Button path="/contacus" destination="CONTAC US"/>
              </li>
              <li className="nav-item">
                <Button path="/trainers" destination="TRAINERS"/>
              </li>

            </ul>
                <Button path="/login" destination="LOG IN"/>
                <Button path="/register" destination="SIGN UP"/>
          </div>
        </div>
      </nav>
    )
  }
}
export default connect((state) => ({
  credentials: state.credentials,
}))(Header2);