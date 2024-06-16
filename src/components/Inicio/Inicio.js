import CardProducto from '../CardProducto/CardProducto'
import './Inicio.css'

const Inicio = ({productos, favoritos, agregar}) => {

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
           <CardProducto key={index} producto={producto} favoritos={favoritos} agregar={agregar}/>
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
