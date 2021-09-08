import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="containerAll bg-light">
          <div className="footerBody">
            <div className="column1">
              <h3 className="linkLogout h3 text-center" Style="cursor:initial;">
                D O G T R A I N I N G
              </h3>
              <p className="parFooter text-center">
                Con más de 10 años de experiencia
              </p>
            </div>
            <div className="column2">
              <div className="support">
                <div className="phone">
                  <FontAwesomeIcon color="black" icon={faPhone} />
                  <a className="tlf" href="tel:+34963323555">
                    963345555
                  </a>
                </div>
                <div className="phone">
                  <FontAwesomeIcon color="black" icon={faEnvelope} />
                  <a className="mail" href="mailto:info@trident.com">
                    info@dogtraining.com
                  </a>
                </div>
              </div>
              <div className="follow">
                <a
                  href="https://twitter.com/?lang=es"
                  target="_blank"
                  className="redes"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon color="black" icon={faTwitter} />
                  <p className="social">Twitter</p>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="redes"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon color="black" icon={faInstagram} />
                  <p className="social">Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
