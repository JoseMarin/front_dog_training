import React from "react";
import Choco from '../../assets/Buenos_modales/educa.png';
import Castigado from '../../assets/Buenos_modales/castigados.png';
import Pensando from '../../assets/Buenos_modales/zyro-image (4).png';

const BuenosModales = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 cards">
      <div className="col">
        <div className="card-border-0">
          <div className="card-body">
            <h1 className="card-title text-center">Educar a tu cachorro</h1>
              <br />
            <p className="card-text">
              <h4>
                &nbsp; &nbsp;  La educación de un cachorro debe empezar al llegar a casa.
              </h4>
              <br />
              - No dejes que tu cachorro coja malos hábitos y haga cosas que
              luego vas a prohibirle.
              <br />
              - Modula la intensidad y el tono de voz. Tu cachorro tiene un oido muy agudo y es tan sensible al tono de tu voz como a las palabras que usas. No es necesario que eleves la voz para que entienda el mensaje, habla de forma firme y concisa.<br/>
              - Para darle una orden a tu cachorro, utiliza siempre las mismas palabras con un tono de voz firme, y los mismos gestos. Utiliza palabras simples para dar órdenes y repite el proceso varias veces hasta que tu cachorro lo entienda.<br/>
              - Felicita a tu cachorro cada vez que haga las cosas bien, acariciale y utiliza un tono de voz cálido y amigable. En las primeras sesiones de entrenamiento puedes darle premios pero posteriormente, deberás utilizarlos de forma execpcional para mantenerlo en una condición corporal óptima.
            </p>
          </div>
        <img className="img-fluid team" Style="width: auto;" src={Choco} alt="home"/>
        </div>
      </div>
      <div className="col">
        <div className="card-border-0">
          <div className="card-body">
            <h1 className="card-title text-center">¿Debo regañar a mi cachorro?</h1>
            <br />
            <p className="card-text">
              <h4>
                &nbsp; &nbsp;  Cuando regañar a nuestro cachorro.
              </h4>
              <br />
              - Los castigos generan estrés y ansiedad a los cachorros, y es preferible utilizar un refuerzo positivo y un método que se base en las recompensas.<br/>
              - Sin embargo es muy útil que tu cachorro aprenda el significado de la palabra "NO" desde muy temprana edad.
            </p>
          </div>
          <img src={Castigado} className="card-img-top" alt="castigado" />
        </div>
      </div>
      <div className="col">
        <div className="card-border-0">
          <div className="card-body">
            <h1 className="card-title">Card title</h1>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
          <img src={Pensando} className="img-fluid card-img-bottom " alt="..." />
        </div>
      </div>
      <div className="col">
        <div className="card-borde-0">
          <div className="card-body">
            <h1 className="card-title">Card title</h1>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <img src="..." className="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default BuenosModales;
