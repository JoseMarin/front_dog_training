/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { notification } from "antd";

const Register = () => {
  let history = useHistory();
  // Hook
  const [datosUser, setDatosUser] = useState({
    name: "",
    lastName: "",
    password: "",
    password2: "",
    isAdmin: "",
    city: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    eName: "",
    eLastName: "",
    ePassword: "",
    ePassword2: "",
    eIsAdmin: "",
    eCity: "",
    eEmail: "",
  });

  //Salta el aviso de que el email ya esta registrado.
  const [, setError] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {});

  // Handler
  const updateFormulario = (e) => {
    setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
  };

  const applyRegister = async () => {

    let body = {
      name: datosUser.name,
      lastName: datosUser.lastName,
      password: datosUser.password,
      city: datosUser.city,
      email: datosUser.email,
    };

    axios
      .post("http://localhost:5000/users", body)
      .then((res) => {
        setDatosUser(res.data.results);
        notification.success({ message: "Registered User.", description: "We have sent you an email to activate the account.",});
        history.push("/login");
      })
      .catch((err) => {
        var errorText = err.response.data.message;

        if (errorText?.includes("email")) {
          notification.warning({
            message: "Attention.",
            description: JSON.stringify(err.response.data.message),
          });
          setError(JSON.stringify("The email is already registered."));
        } else {
          notification.warning({ message: "Error try again",description: JSON.stringify(err.response.data.message),});
          setError(JSON.stringify(err.response.data.message));
        }
        return Error("Files not Found");
      });
  };

  const checkError = (arg) => {
    switch (arg) {
      case "name":
        if (
          datosUser.name.length < 2 ||
          !/^[a-z ,.'-]+$/i.test(datosUser.name) ||
          datosUser.name.length > 25
        ) {
          setErrors({ ...errors, eName: "*" });
        } else {
          setErrors({ ...errors, eName: "" });
        }
        break;

      case "LastName":
        if (
          datosUser.name.length < 2 ||
          !/^[a-z ,.'-]+$/i.test(datosUser.name) ||
          datosUser.name.length > 25
        ) {
          setErrors({ ...errors, eLastName: "*" });
        } else {
          setErrors({ ...errors, eLastName: "" });
        }
        break;

      case "email":
        if (
          !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            datosUser.email
          )
        ) {
          setErrors({ ...errors, eEmail: "*" });
        } else {
          setErrors({ ...errors, eEmail: "" });
        }

        break;

      case "password":
        if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
            datosUser.password
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
        if (datosUser.password !== datosUser.password2) {
          setErrors({ ...errors, ePassword2: "Password should be the same" });
        } else {
          setErrors({ ...errors, ePassword2: "" });
        }
        break;

      case "city":
        if (
          datosUser.name.length < 2 ||
          !/^[a-z ,.'-]+$/i.test(datosUser.name) ||
          datosUser.name.length > 25
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
  const errorStyle = (arg) => {
    let errorDefault = "name";
    let errorWarning = "red";

    if (errors.eName !== "") {
      return errorWarning;
    }
    return errorDefault;
  };

  return (
    <div className="vistaRegister">
      <div className="formulario1">
        <div className="errorsText">{errors.eName}</div>
        <div className="box1">
          <form className="form">
            <input
              className="input"
              name="name"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("name")}
              required
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Name</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{errors.eLastName}</div>
          <form className="form1">
            <input
              className="input1"
              name="lastName"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("LastName")}
              required
            />
            <label className="lbl-nombre1">
              <span className="text-nomb1">Last Name</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{errors.eEmail}</div>
          <form className="form2">
            <input
              className="input2"
              name="email"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("email")}
              required
            />
            <label className="lbl-nombre2">
              <span className="text-nomb2">Email</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText2">{errors.ePassword}</div>
          <form className="form3">
            <input
              className="input3"
              name="password"
              type="password"
              onChange={updateFormulario}
              onBlur={() => checkError("password")}
              required
            />
            <label className="lbl-nombre3">
              <span className="text-nomb3">Password</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText2">{errors.ePassword2}</div>
          <form className="form4">
            <input
              className="input4"
              name="password2"
              type="password"
              onChange={updateFormulario}
              onBlur={() => checkError("password2")}
              required
            />
            <label className="lbl-nombre4">
              <span className="text-nomb4">Repeat Password</span>
            </label>
          </form>
        </div>
        <div className="box1">
          <div className="errorsText">{errors.eCity}</div>
          <form className="form5">
            <input
              className="input5"
              name="city"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("city")}
              required
            />
            <label className="lbl-nombre5">
              <span className="text-nomb5">City</span>
            </label>
          </form>
        </div>

        <div className="registerButton" onClick={() => applyRegister()}>
          GET STARTED
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credential: state.credential,
}))(Register);