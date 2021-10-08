import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Job Bag</h4>
              <ul className="list-unstyled">
              <li>Sobre Nosotros</li>
              <li>Clientes</li>
              <li>Testimonios</li>
              </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Servicios</h4>
            <ul className="list-unstyled">
              <li>Design-UI</li>
              <li>Front-End</li>
              <li>Back-End</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contactanos</h4>
            <ui className="list-unstyled">
              <li>Santiago</li>
              <li>La Romana</li>
              <li>Districto Nacional</li>
            </ui>
          </div>
           {/* Column4 */}
          <div className="col">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Linkendin</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Job Bag | Todos los derechos reservados |
            Terminos de Servicios| Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;