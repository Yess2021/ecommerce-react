import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
      <body>
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
            <a className="logoFav" href="" id="favoritos"></a>
            <a className="logoRegistro" href="" id="registro"></a>

            <div className="search-container">
                <div id="logoBuscar"></div> 
                <div id="barra-busqueda">
                    <input type="text" id="input-busqueda" />
                    <input type="button" value="Buscar" id="buscar" />
                </div>
            </div>

            <a className="logoCarrito" href="" id="carrito">
                <div id="contadorCarrito"></div>
            </a>
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

      </body>
    )
  }

  export default Layout
