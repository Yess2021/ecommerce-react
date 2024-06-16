import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Footer from "../Footer/Footer";
import Alert from "../Alert/Alert";

const Layout = ({textoAlert, contadorCarrito}) => {
    return (
      <div>
       <header>
        <div className="container-mariposa">
            <h2 id="nombre-empresa">Mariposa 88</h2>
            <div className="logo-mariposa"></div>
        </div>

        <nav>
            <ul>
                <li> <Link to="/">Inicio</Link> </li>
                <li> <Link to="/alta">Alta</Link> </li>
                <li> <Link to="/contacto">Contacto</Link> </li>
                <li> <Link to="/nosotros">Nosotros</Link> </li>
            </ul>
        </nav>

        <div className="iconos-header">
            <Link to="/favoritos" className="logoFav" id="favoritos"></Link>
            <Link to="/registro" className="logoRegistro" id="registro"></Link>

            <div className="search-container">
                <div id="logoBuscar"></div> 
                <div id="barra-busqueda">
                    <input type="text" id="input-busqueda" />
                    <input type="button" value="Buscar" id="buscar" />
                </div>
            </div>

            <Link to="/carrito" className="logoCarrito" href="" id="carrito">
                {contadorCarrito !==0 ? <div id="contadorCarrito">{contadorCarrito}</div> : ''}
            </Link>
        </div>

        <button className="menu-hamburger" id="hamburger"></button>

    </header>

    <div id="overlay">
        <div className="mobile-menu">
            <div className="mobile-icons">
                <div className="grupo-iconos">
                    <a className="logoFav" href="index.html#favoritos"></a>
                    <a className="logoRegistro" href="index.html#registro"></a>
                    <a className="logoCarrito" href="index.html#carrito"></a>
                </div>
                <button className="cerrar" id="closeMenu"></button> 
            </div>
            <hr className="hr-mobile" />
            <ul className="links-menu">
                <li> <a href="index.html">Inicio</a> </li>
                <li> <a href="index.html#alta">Alta</a> </li>
                <li> <a href="index.html#contacto">Contacto</a> </li>
                <li> <a href="index.html#nosotros">Nosotros</a> </li>
            </ul>
            <div className="social-icons">
                <div className="face"></div>
                <div className="insta"></div>
                <div className="tictoc"></div>
            </div>

        </div>

    </div>
  
        <Outlet />
        <Alert texto={textoAlert} />
        <Footer />
      </div>
    )
  }

  export default Layout
