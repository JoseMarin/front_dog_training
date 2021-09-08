import React from "react";
import home from "../../assets/Buenos_modales/mascotas.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Home = () => {
  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <div className="homeContainer">
      <div className="postHome">
        <div className="contenedorTexto text-center">
          <h1>ADIESTRAMIENTO  CANINO</h1>
          <p className="parrHome">
            Somos una comunidad dedicada al cuidado de nuestras mascotas,
            tenemos más e 10 años de experiencia en el adiestramiento canino,
            apoyando a la comunidad durante el crecimiento de tu cachorro.
            Actualmente somos alrededor de 2mil usuarios registrados en nuestra
            aplicación, en la cual puedes encontrar apoyo por parte de los
            usuarios o entrenadores especilizados en el adiestrmiento canino.
          </p>
          <div className="buttonHome" onClick={() => goTo("/contact")}>
            Escríbenos
          </div>
        </div>
        <img className="fondo" src={home} alt="home"  />
      </div>

      <div className="optionsHome">
        <div className="option">
          <p>ADIESTRADORES</p>
          <p className="parrafos">
            Contacta libremente con cualquiera de nuestros trainers.
          </p>
          <div className="buttonOption" onClick={() => goTo("/trainers")}></div>
        </div>
        <div className="option">
          <p>CONTÁCTANOS</p>
          <p className="parrafos">
            Estaremos encantado de aclararte las dudas respecto a nuestra
            comunidad.
          </p>
          <div className="buttonOption" onClick={() => goTo("/contact")}></div>
        </div>
        <div className="option">
          <p>SOBRE NOSOTROS</p>
          <p className="parrafos">
            Conocenos más a fondo y comperte tus experiencias con nosotos
          </p>
          <div className="buttonOption" onClick={() => goTo("/aboutus")}></div>
        </div>
      </div>
    </div>
  );
};
export default connect((state) => ({
  credentials: state.credentials,
}))(Home);
