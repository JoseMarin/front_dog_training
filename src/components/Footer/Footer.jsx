import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import logo from "../../img/logo.png";
const Footer = () => {
  let history = useHistory();

  return (
    <div>
      <footer>
        <div className="containerAll">
          <div className="footerBody">
            <div className="column1">
              <h3 className="titleFooter" Style="color:white;">D O G T R A I N I N G</h3>
              <p className="experience parFooter">
                With more than 10 years of experience
              </p>
            </div>
            {/* <div className="tooth">
                            <img src={logo} alt="logo"  width="70"/>
                        </div> */}
            <div className="column2">
              <div className="support">
                <div className="phone">
                  <FontAwesomeIcon color="white" icon={faPhone} />
                  <a className="tlf" href="tel:+3495323123">
                    95323123
                  </a>
                </div>
                <div className="phone">
                  <FontAwesomeIcon color="white" icon={faEnvelope} />
                  <a className="mail" href="mailto:info@trident.com">
                    info@trident.com
                  </a>
                </div>
              </div>
              <div className="follow">
                <a href="https://es-es.facebook.com/ " className="redes">
                  <FontAwesomeIcon  color="white" icon={faFacebook} />
                  <p className="social">Facebook</p>
                </a>
                <a href="https://twitter.com/?lang=es" className="redes">
                  <FontAwesomeIcon  color="white" icon={faTwitter} />
                  <p className="social">Twitter</p>
                </a>

                <a href="https://www.instagram.com/ " className="redes">
                  <FontAwesomeIcon color="white" icon={faInstagram} />
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
