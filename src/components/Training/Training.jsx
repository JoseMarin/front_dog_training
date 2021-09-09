import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const Training = (props) => {
  let history = useHistory();

  if (props.credentials?.token) {
  }

  return (
    <div className="dropdown training">
      <ul className="navbar-nav">
        <li className="nav-item dropdown" id="dmenu">
          <div
            className="nav-link linkLogout  dropdown-toggle text"
            Style="color:black; font-size: 1.3em;"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            data-hover="dropdown"
            aria-expanded="false"
          >
            ADIESTRAMIENTO
          </div>
          <ul
            className="dropdown-menu text-center dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <div
                className="dropdown-item"
                onClick={() => history.push("/trainers")}
              >
                Adiestradores
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => history.push("/buenosmodales")}
              >
                Buenos Modales
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => history.push("/ejercicios")}
              >
                Ejercicios
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => history.push("/obedienciabasica")}
              >
                Obediencia Básica
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={() => history.push("/alimentacion")}
              >
                Salud
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
