import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="containerAll bg-light">
          <div className="footerBody">
            <div className="column1">
              <h3 className="linkLogout h3 text-center" Style="cursor:initial;">
                D O G &nbsp; T R A I N I N G
              </h3>
              <p className="parFooter text-center">
                Con más de 10 años de experiencia
              </p>
            </div>
            <div className="column2">
              <div className="support">
                <div className="phone">
                  <a className="tlf" href="tel:+34963323555">
                  <span className="social"><i className="fa fa-phone"></i></span>&nbsp;
                    963345555
                  </a>
                </div>
                <div className="phone">
                <span className="social"><i className="fa fa-envelope"></i></span>&nbsp;
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
                  <p className="social"><i className="fa fa-twitter" color="black">&nbsp;</i> Twitter</p>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="redes"
                  rel="noreferrer"
                >
                  <p className="social"><i className="fab fa-instagram" color="black">&nbsp;</i> Instagram</p>
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
