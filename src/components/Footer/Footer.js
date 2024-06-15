import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="icons-footer">
        <div className="container-mariposa">
          <h2 id="nombre-empresa">Mariposa 88</h2>
          <div className="logo-mariposa"></div>
        </div>
        <div id="social-footer">
          <div className="face"></div>
          <div className="insta"></div>
          <div className="tictoc"></div>
        </div>
      </div>
      <hr />
      <div className="extra-footer">
        <ul>
          <li>Cambios y devoluciones</li>
          <li>Envios</li>
          <li>Formas de Pago</li>
          <li>Terminos y Condiciones</li>
        </ul>
      </div>

      <footer>
        <h3 className="titulo-footer">
          &copy; Copyright 2024 Bikinis Mariposa 88
        </h3>
      </footer>
    </>
  );
};

export default Footer;
