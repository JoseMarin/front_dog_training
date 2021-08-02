import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { UPDATE_USER } from "../../redux/types";
// import spinner from '../../assets/spinner2.gif';

const UpdateUser = (props) => {
  let history = useHistory();

  const [updateInfo, setUpdateInfo] = useState({
    name: props.credentials?.user.name,
    email: props.credentials?.user.email,
    city: props.credentials?.user.city,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const [errors, setErrors] = useState({
    eEmail: "",
    ePassword: "",
    ePassword2: "",
    eCity: "",
    eValidate: "",
  });

  // Handlers
  const updateInfoClient = (e) => {
    setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
  };

  const updatePasswordClient = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const updateUser = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.user;

      let body = {
        userId: user.id,
        email: updateInfo.email,
        city: updateInfo.city,
      };

      let res = await axios.put(
        "http://localhost:5000/users",
        body,
        { headers: { authorization: "Bearer " + token } }
      );

        props.dispatch({ type: UPDATE_USER, payload: res.data });

        setTimeout(() => {
          history.push("/profile");
        }, 250);
    } catch (err) {
        setErrors({
        ...errors,
        eValidate: "Could not be completed., please try again",
      });
    }
  };

  const updatePassword = async () => {
    try {
      let token = props.credentials?.token;
      let user = props.credentials?.user;

      let body = {
        userId: user.id,
        oldPassword: passwords.oldPassword,
        newPassword: passwords.newPassword,
        newPassword2: passwords.newPassword2,
      };

      let res = await axios.put(
        "http://localhost:5000/users/updatepassword",
        body,
        { headers: { authorization: "Bearer " + token } }
      );
      setTimeout(() => {
        props.dispatch({ type: UPDATE_USER, payload: res.data });

        history.push("/profile");
      }, 750);
    } catch (err) {
      setErrors({ ...errors, eValidate: "Wrong password, please try again" });
    }
  };

  const checkError = (arg) => {
    switch (arg) {
      case "email":
        if (
          !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            updateInfo.email
          )
        ) {
          setErrors({ ...errors, eEmail: "Please enter a valid e-mail" });
        } else {
          setErrors({ ...errors, eEmail: "" });
        }

        break;

      case "password":
        if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
            passwords.newPassword
          )
        ) {
          setErrors({
            ...errors,
            ePassword:
              "At least 8 characters, 1 capital letter, and 1 number.",
          });
        } else {
          setErrors({ ...errors, ePassword: "" });
        }
        break;

      case "password2":
        if (passwords.newPassword !== passwords.newPassword2) {
          setErrors({ ...errors, ePassword2: "Password should be the same" });
        } else {
          setErrors({ ...errors, ePassword2: "" });
        }
        break;

        case "city":
        if (
          updateInfo.city.length < 1 ||
          !/^[a-z ,.'-]+$/i.test(updateInfo.city) ||
          updateInfo.city.length > 25
        ) {
          setErrors({ ...errors, eCity: "*" });
        } else {
          setErrors({ ...errors, eCity: "" });
        }
        break;

      default:
        break;
    }
  };

  if (props.credentials?.token) {
    return (
      <div className="vistaRegister2">
        <div className="formulario2">
          <div className="box1">
            <div className="errorsText">{errors.ePassword}</div>
            <form className="form3">
              <input
                className="input3"
                name="oldPassword"
                type="password"
                onChange={updatePasswordClient}
                required
              />
              <label className="lbl-nombre3">
                <span className="text-nomb3">Old Password</span>
              </label>
            </form>
          </div>

          <div className="box1">
            <div className="errorsText">{errors.ePassword2}</div>
            <form className="form3">
              <input
                className="input3"
                name="newPassword"
                type="password"
                onChange={updatePasswordClient}
                onBlur={() => checkError("password")}
                required
              />
              <label className="lbl-nombre3">
                <span className="text-nomb3">New Password</span>
              </label>
            </form>
          </div>

          <div className="box1">
            <div className="errorsText">{errors.ePassword2}</div>
            <form className="form3">
              <input
                className="input3"
                name="newPassword2"
                type="password"
                onChange={updatePasswordClient}
                onBlur={() => checkError("password2")}
                required
              />
              <label className="lbl-nombre3">
                <span className="text-nomb3">Repeat New Password</span>
              </label>
            </form>
          </div>
          <div className="errorsText">{errors.eValidate}</div>
            <div className="updateButton" onClick={() => updatePassword()}>
                UPDATE
            </div>
        <br/><br/><br/>
          <div className="box1">
            <div className="errorsText">{errors.eEmail}</div>
            <form className="form2">
              <input
                className="input2"
                name="email"
                type="email"
                onChange={updateInfoClient}
                onBlur={() => checkError("email")}
                required
              />
              <label className="lbl-nombre2">
                <span className="text-nomb2">Email</span>
              </label>
            </form>
          </div>
          <div className="box1">
            <div className="errorsText">{errors.eCity}</div>
            <form className="form24">
              <input
                className="input24"
                name="city"
                type="text"
                onChange={updateInfoClient}
                onBlur={() => checkError("city")}
                required
              />
              <label className="lbl-nombre24">
                <span className="text-nomb24">City</span>
              </label>
            </form>
          </div>
            <div className="updateButton" onClick={() => updateUser()}>
              UPDATE
            </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinnerContainer">
        <div className="spinner">
          <img src={{}} alt="spinner" width="60" />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(UpdateUser);