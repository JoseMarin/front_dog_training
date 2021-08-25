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
    <div className="row row-cols-1 row-cols-md-2 g-4 cards">
      <div className="col">
        <div className="card-border-0">
          <div className="card-body text-center ">
            <h1 className="card-title text-center">¿Cómo podemos ayudarte?</h1>
            <br />
            <br />
            <div className="card-text text-center">
              <br />
              <div className="box1">
                <form className="form mt-5 m-xxl-auto">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    onChange={updateFormulario}
                    required
                  />
                  <div className="errorsText">{errors.eName}</div>
                  <label className="lbl-nombre">
                    <span className="text-nomb">Name</span>
                  </label>
                </form>
              </div>

              <form className="form2  m-xxl-auto">
                <input
                  className="input2"
                  name="email"
                  type="text"
                  onChange={updateFormulario}
                  onBlur={() => checkError("email")}
                  required
                />
                <div className="errorsText">{errors.eEmail}</div>
                <label className="lbl-nombre2">
                  <span className="text-nomb2">Email</span>
                </label>
              </form>
              <textarea
                className="text"
                name="message"
                cols="50"
                rows="10"
                placeholder="Type your text here"
              ></textarea>
            </div>

            <button
              href="#"
              className="btn btn-primary"
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
            <h1 className="card-title text-center">Contacta con nosotros</h1>
            <br />
            <p className="card-text">
              <br />
              <div className="contactInfo">
                <h2>Llámanos</h2>
                <a class="tlf" href="tel:+34963231237">
                  963231237
                </a>
                <h2>Oficinas</h2>
                <p>Lunes a Viernes: 7am to 5:15 pm.</p>
                <h2>Escríbenos</h2>
                <a class="mail" href="mailto:info@trident.com">
                  info@trident.com
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="card-border-0">
        <div className="card-body">
          <div className="">
            <form className="form">
              <input
                className="input"
                name="name"
                type="text"
                onChange={updateFormulario}
                required
              />
              <div className="errorsText">{errors.eName}</div>
              <label className="lbl-nombre">
                <span className="text-nomb">Name</span>
              </label>
            </form>
          </div>

          <form className="form2">
            <input
              className="input2"
              name="email"
              type="text"
              onChange={updateFormulario}
              onBlur={() => checkError("email")}
              required
            />
            <div className="errorsText">{errors.eEmail}</div>
            <label className="lbl-nombre2">
              <span className="text-nomb2">Email</span>
            </label>
          </form>

          <textarea
            className="text"
            name="message"
            cols="50"
            rows="10"
            placeholder="Type your text here"
          ></textarea>
        </div>

        <button
          href="#"
          className="btn btn-primary"
          type="button"
          onClick={() => send()}
        >
          Send
        </button>
      </div> */}
    </div>
  );
};

export default Contact;
