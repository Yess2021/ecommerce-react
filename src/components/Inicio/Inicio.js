import './Inicio.css'

const Inicio = ({productos}) => {

const listaFavoritos = []

    return <section className="inicio">
    <div id="img1-inicio">
        <div id="img2-inicio"></div>
        <div className="texto">
            <h3>Verano todo el año<br/>Llevate todo!</h3>
            <p>Hasta 30% off</p>
        </div>
    </div>
    <div className="section-cards">
        <div className="section-cards-header">
            <h1>Conjuntos de Bikinis</h1>
        </div>

        <div className="section-cards-container">

        {productos.map((producto, index) =>
            <section class="card-container" id={`cc-${producto.id}`}> 
                        <img src={producto.foto} /> 
                        <button class="favoritosIcon" id={`agregarFavoritos-${producto.nombre}`} value={producto.nombre} > 
                        <img id={`img-${producto.nombre}`} src={listaFavoritos.includes(producto.nombre) ? 'icons/favorite-checked.svg' : 'icons/favorite.svg'} />
                        </button>
                        <h4>{producto.nombre}</h4>
                        <p>{producto.detalles}</p>
                        <p>{producto.precio.toLocaleString()}</p>
                        <p class="tallasContainer">

                        {/* <label class="tallas tallaSeleccionar" id={`${producto.id + "," + valor}`}> ${valor}</label> */}
                        </p><div class="colores-container">

                        <div class="colores" id={`${producto.id + "," + index}`} style={{backgroundColor: "red"}}></div>
                        </div>
                        <button id={`btnComprar-${producto.id}`} disabled>Agregar al Carrito</button>
            </section>
        )}


        </div>

        <button className="ver-mas">Ver mas</button>
    </div>
    <h3 id="look">Shop the Look</h3>
    <section id="extra">
        <div className="shopLook" id="look1"></div>
        <div className="shopLook" id="look2"></div>
        <div className="shopLook" id="look3"></div>
        <div className="shopLook" id="look4"></div>
        <div className="shopLook" id="look5"></div>
    </section>
</section>
}

export default Inicio
