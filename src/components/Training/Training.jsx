// import React, { useState } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { useHistory } from "react-router";

const Training = (props) => {
  let history = useHistory();

  if (props.credentials?.token) {
  }

  return (
    <div class="dropdown training">
      <ul class="navbar-nav">
        <li class="nav-item dropdown" id="dmenu">
          <div
            className="nav-link dropdown-toggle text-white"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            data-hover="dropdown"
            aria-expanded="false"
          >
            TRAINING
          </div>
          <ul
            class="dropdown-menu text-center dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <div
                class="dropdown-item"
                onClick={() => history.push("/buenosmodales")}
              >
                Buenos Modales
              </div>
            </li>
            <li>
              <div
                class="dropdown-item"
                onClick={() => history.push("/obedienciabasica")}
              >
                Obediencia Básica
              </div>
            </li>
            <li>
              <div
                class="dropdown-item"
                onClick={() => history.push("/ejercicios")}
              >
                Ejercicios
              </div>
            </li>
            <li>
              <div
                class="dropdown-item"
                onClick={() => history.push("/perronuevo")}
              >
                Perro Nuevo
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default connect((state) => ({
  credentials: state.credentials,
}))(Training);
