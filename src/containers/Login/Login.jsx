import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/types.js";
import {notification} from 'antd';


const Login = (props) => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [msgError, setMensajeError] = useState({
        eEmail: "",
        ePassword: "",
        eValidate: "",
    });

    // Esto es un Handler
    const updateCredentials = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        //Este useEffect corresponde a una vez
        //el componente se HA montado. Sólo se ejecuta una vez.
        // templateLogin();
    }, []);

    useEffect(() => {
        //Este useEffect sin el array vacio como segundo argumento,
        //corresponde al estado de cada actualización del componente. Se ejecutará
        //tantas veces como se cambie el estado del componente
    });

    const checkError = async (arg) => {
        switch (arg) {
        case "email":
            if (credentials.email.length < 1 || !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            )) {
            setMensajeError({ ...msgError, eEmail: "Enter a valid mail" });
            } else {
            setMensajeError({ ...msgError, eEmail: "" });
            }
            break;

        case "password":
            if (credentials.password.length < 1 || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
            )) {
            setMensajeError({
                ...msgError,
                ePassword: "At least 8 characters, 1 capital letter, and 1 number.",
            });
            } else {
            setMensajeError({ ...msgError, ePassword: "" });
            }
            break;

        default:
            break;
    }
  };

    const logeame = async () => {
        // A continuamos, generamos el body de datos
        let body = {
            email: credentials.email,
            password: credentials.password,
        };

        // Envío por axios
        axios
        .post("http://localhost:5000/login", body)
        .then((res) => {
          //Guardo en RDX
          props.dispatch({ type: LOGIN, payload: res.data });

          if (!res.data.user.isAdmin) {
            history.push("/");
          } else {
            history.push("/admin");
          }
        })
        .catch((err) => {
          notification.warning({message:'Atencion.',description: JSON.stringify(err.response.data.message)});
        });
    };

  return (
    <div className="vistaLogin">
      <div className="loginCard">
        <h2 className="h2">Welcome Back!</h2>
        <br />
        <div className="box1">
          <div className="errorsText">{msgError.eEmail}</div>
          <form className="form22">
            <input
              className="input22"
              name="email"
              type="text"
              onChange={updateCredentials}
              onBlur={() => checkError("email")}
              required
            />
            <label className="lbl-nombre22">
              <span className="text-nomb22">Email</span>
            </label>
          </form>
        </div>

        <div className="box1">
          <div className="errorsText">{msgError.ePassword}</div>
          <form className="form23">
            <input
              className="input23"
              name="password"
              type="password"
              onChange={updateCredentials}
              onBlur={() => checkError("password")}
              required
            />
            <label className="lbl-nombre23">
              <span className="text-nomb23">Password</span>
            </label>
          </form>
        </div>

        <div className="sendButton" onClick={() => logeame()}>
          LOG IN
        </div>
        <div className="errorsText">{msgError.eValidate}</div>
      </div>
    </div>
  );
};

export default connect()(Login);