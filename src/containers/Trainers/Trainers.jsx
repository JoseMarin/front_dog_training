import React from "react";
import sit from "../../assets/Buenos_modales/sit.jpeg";
import quieto from "../../assets/Buenos_modales/quieto.jpeg";
import bySide from "../../assets/Buenos_modales/bySide.png";

const Trainers = () => {
  return (
    <>
      <header className="mainAbout">
        <h1 className="aboutTitle">
          <span className="spanTitle">Nuestro equipo</span>
        </h1>
        <h2 className="vinculo">
          Inspirados por lo que les apasiona y llena, siempre damos el 200%
        </h2>
        <span className="spanTitle">Dog &nbsp; Training</span>
      </header>
      <main className="containerAbout">
        <section className="card cardAbout" data-aos="zoom-in">
          <img
            className="fondo"
            Style="height:100%; width:100%;"
            src={sit}
            alt="institutoPatitas"
          />
          <div>
            <h3 className="tlf text-center">Alejandro Urbina</h3>
            <p id="parrAbout">
              Programador y Director de adiestramiento canino, un joven
              apasionado por el mundo tecnológico, sus perros y el desarrollo de
              aplicaciones web, le inspiró en desarrollar esta plataforma web
              sobre el adiestramiendo canino. Donde volco todo su cariño para
              llevar a cabo el proyecto y brindarle un hueco en la red para los
              amantes caninos donde puedan compartir ideas, dudas, y por que no,
              hacer quedadas con los usuarios más cercanos de tu zona
            </p>
          </div>
        </section>

        <section className="card cardAbout" data-aos="zoom-out">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={quieto}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Carlos Pagadigorria</h3>
            <p id="parrAbout">
              Carlos es un joven emprendedor, amante de los perros lo cual le
              llevo a ser un experto en el adiestramiento canino, cuenta con más
              de 10 años de experiencia, formación profesional y una larga lista
              de resultados positivos sobre la mejora de conducta de tu perro,
              desde los principios básicos de como educar a tu perro, hasta
              adiestramiento para funciones especiales, adiestramiento
              deportivo, asistencia y terapia. Puedes contactar con él para
              consultarle cualquier duda que te pueda surguir.
            </p>
          </div>
        </section>

        <section className="card cardAbout" data-aos="flip-up">
          <img
            className="imgAbout"
            Style="height:100%;"
            src={bySide}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Alika Masha</h3>
            <p id="parrAbout">
              Alika es otra joven emprendedora y amante de los animales, también
              cuenta con una extensa y experimentada carrera sobre el
              adiestramiento canino, como: adiestramiento condicionante,
              adiestramiento mixto, y técnicas de adiestramiento basadas en la
              etología. Lo cual hace de este equipo una fusión única para
              brindar el apoyo necesario a la comunidad y seguir creciendo con
              ella.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Trainers;
