// import React, { useState } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { useHistory } from "react-router";

const Training = (props) => {

  let history = useHistory();

  // const [, setComedy] = useState([]);

//   const change = async () => {
//     let genre = document.getElementById("opciones").value;

//     axios
//       .get(
//         `https://api.themoviedb.org/3/discover/movie?api_key=79a61f5dc13e3e9e4834fadbf4f326c7&language=en-US&with_genres=${genre}`
//       )
//       .then((res) => {
//         setComedy(res.data.results);

//         // history.push("/moviesgenre");
//       })
//       .catch(() => {
//         throw new Error("Wrong user or password");
//     });
// };

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
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <div class="dropdown-item" onClick={() => history.push("/buenosmodales")}>
                Buenos Modales
              </div>
            </li>
            <li>
              <div class="dropdown-item" onClick={() => history.push("/obedienciabasica")}>
                Obediencia Básica
              </div>
            </li>
            <li>
              <div class="dropdown-item" onClick={() => history.push("/ejercicios")}>
                Ejercicios
              </div>
            </li>
            <li>
              <div class="dropdown-item" onClick={() => history.push("/perronuevo")}>
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