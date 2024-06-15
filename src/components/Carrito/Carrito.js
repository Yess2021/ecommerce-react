import './Carrito.css'

const Carrito = () => {




    return <section className="carrito">
    <h1 className="carrito-titulo">carrito de compras</h1>
    
    <button className="carrito__borrar">Borrar</button>
    <table></table>
    <section id="seccionTotal" className="total">
        <div>Total Estimado</div>
        <div id="total">$$$</div>         
    </section>    
    <button className="carrito__pedir">Pedir</button>
</section>

}

export default Carrito
