import React, { useState, useEffect } from "react";

const Contact = () => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    eName: "",
    eEmail: "",
  });

  useEffect(() => {}, []);

  useEffect(() => {});

  const send = () => {
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };
  // Handler
  const updateFormulario = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const checkError = (arg) => {
    switch (arg) {
      case "name":
        if (
          datos.name.length < 2 ||
          !/^[a-z ,.'-]+$/i.test(datos.name) ||
          datos.name.length > 25
        ) {
          setErrors({ ...errors, eName: "*" });
        } else {
          setErrors({ ...errors, eName: "" });
        }
        break;
      case "email":
        if (
          !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
            datos.email
          )
        ) {
          setErrors({ ...errors, eEmail: "*" });
        } else {
          setErrors({ ...errors, eEmail: "" });
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="row row-cols-1 row-cols-md-2 g-1 contact">
      <div className="col">
        <div className="card-border-0">
          <div className="card-body text-center ">
            <h1 className="card-title text-center h1Contact">
              ¿Cómo podemos ayudarte?
            </h1>
            <br />
            <br />
            <div className="card-text text-center">
              <br />
              <div>
                <div className="errorsText">{errors.eName}</div>
                <form className="form mt-5 m-xxl-auto">
                  <input
                    className="input"
                    autoFocus="autoFocus"
                    name="name"
                    type="text"
                    onChange={updateFormulario}
                    required
                  />
                  <label className="lbl-nombre">
                    <span className="text-nomb">Name</span>
                  </label>
                </form>
              </div>

              <div className="errorsText">{errors.eEmail}</div>
              <form className="form2  m-xxl-auto">
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
              <div className="textarea">
                <textarea
                  className="text text-center border-0"
                  name="message"
                  cols="50"
                  rows="10"
                  placeholder="Type your text here"
                ></textarea>
              </div>
            </div>

            <button
              href="#"
              className="btn btn-primary mt-2 buttonContact"
              type="button"
              onClick={() => send()}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card-border-0">
          <div className="card-body text-center">
            <h1 className="card-title h1Contact text-center">
              Contacta con nosotros
            </h1>
            <br />
            <p className="card-text">
              <br />
              <div className="contactInfo h1Contact">
                <a className="tlf" href="tel:+34963345555">
                  <span className="social" Style="color:black;">
                    <i className="fa fa-phone"></i>
                  </span>
                  &nbsp; 963345555
                </a>
                <br />
                <a className="mail" href="mailto:info@dogtraining.com">
                  <span className="social" Style="color:black;">
                    <i className="fa fa-envelope"></i>
                  </span>
                  &nbsp; info@dogtraining.com
                </a>
                <br />
                <br />
                <h2 className="h1Contact">Oficinas</h2>
                <p className="tlf">Lunes a Viernes: 7am a 5:15 pm.</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
