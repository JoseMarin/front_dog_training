import React from "react";

const Alimentacion = () => {
  return (
    <>
      <header className="mainAbout">
        <h1 className="aboutTitle">
          <span className="spanTitle">Tu perro nuevo</span>
        </h1>
        <h2 className="vinculo">
          El ejercicio le aportará una forma de mantener su peso ideal
        </h2>
        <span className="spanTitle">Estilo&nbsp; de&nbsp; vida</span>
      </header>
      <main className="containerAbout">
        <section
          className="card cardAbout"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="linear"
        >
          <img
            className="fondo"
            Style="height:100%; width:100%;"
            // src={jugando}
            alt="institutoPatitas"
          />
          <div>
            <h3 className="tlf text-center">Bienestar</h3>
            <p id="parrAbout">
              Controlar el estado físico desde cachorro nos ayudara a mantener a
              nuestros peludos en buena forma física. Hay diferentes maneras de
              ejercitar a tu perro, y en función de su raza, necesitará más o
              menos actividad física. En este apartado te daremos unos tips a
              seguir según su edad.
            </p>
          </div>
        </section>

        <section
          className="card cardAbout"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          <img
            className="imgAbout"
            Style="height:100%;"
            // src={cachorro}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Ejercicio para cachorros</h3>
            <p id="parrAbout">
              Los cachorros ¡están llenos de energía! lo sabemos, si nuestro
              cachorro no hace suficiente deporte, puede volverse un poco
              salvaje y generar malos hábitos. Por eso es bueno dedicarle tiempo
              a juegos para quemar toda esa energía que quiere descargar. Busca
              una pelota y lánzasela hasta agotar su energía. Busca a un amigo
              cachorro con el que pueda jugar y quemar las energías juntos. Sal
              a pasear, jugar y juega a perseguirlo, recuerda, tu cachorro esta
              en crecimiento y un exceso de ejericicios puede afectar a sus
              articulaciones.
            </p>
          </div>
        </section>

        <section
          className="card cardAbout"
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="imgAbout"
            Style="height:100%;"
            // src={jovenes}
            alt="trainers"
          />
          <div>
            <h3 className="tlf text-center">Ejercicio para adultos jóvenes</h3>
            <p id="parrAbout">
              Ya no es el tierno peludo que llego a casa, sus dientes ya duelen
              más cuando nos muerde y sus patas grandes. Tiene entre 10 y 24
              meses, dependiendo de la raza de tu perro, tienes que saber cuál
              es su límite para hacer ejercicios, recuerda jugar con otro perro
              te puede enseñar cuál es su límite con el ejercicio. En este punto
              puedes añadirle al entrenamiento de tu perro, nadar, ya que no le
              perjudica a las articulaciones en crecimiento.
            </p>
          </div>
        </section>

        <section
          className="card cardAbout"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="imgAbout"
            Style="height:100%;"
            // src={adulto}
            alt="adiestramiento"
          />
          <div>
            <h3 className="tlf text-center">Ejercicios para perros adultos</h3>
            <p id="parrAbout">
              Cuando tu perro sea adulto notarás que ya no tiene tanta energía,
              esto dependerá de cada perro. Para mantener una vida sana, los
              paseos son una manera estupenda para mantener a tu perro alegre y
              evitar que se aburra, realiza excursiones con él, llevarlos a
              sitios nuevos es una buena forma de estimular a un perro con pocas
              ganas de hacer ejercicio. Si tu perro esta sano y le gusta correr,
              prueba a correr juntos y llevarle a un Agility.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Alimentacion;
