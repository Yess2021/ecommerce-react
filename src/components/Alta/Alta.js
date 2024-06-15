import './Alta.css'

const Alta = () => {
    return <section className="alta">
       <h1 className="titulo-alta">Alta de productos</h1>
   
       <form className="alta-form">
           {/* campo de ingreso de nombre de producto */}
           <div className="input-group">
               <label for="nombre">nombre</label>
               <input className="entrada" id="nombre" type="text" name="nombre" autocomplete="off" required />
               <div id="error-nombre" className="error-details"></div>
           </div>
   
           {/* campo de ingreso de detalles de producto */}
           <div className="input-group">
               <label for="detalles">detalles</label>
               <input className="entrada" id="detalles" type="text" name="detalles" autocomplete="off" required />
               <div id="error-detalles" className="error-details"></div>
           </div>
   
           {/* campo de ingreso de precio de producto */}
           <div className="input-group">
               <label for="precio">precio</label>
               <input className="entrada" id="precio" type="number" name="precio" autocomplete="off" required />
               <div id="error-precio" className="error-details"></div>
           </div>
   
            {/* campo de ingreso de colores de producto */}
           <div id = "colores-cantidades" className="input-group">
               <div className="error-details"></div>
           </div>
   
           {/* campo de ingreso de la foto del producto */}
           <div className="input-group">
               <label for="foto">foto</label>
               <input className="entrada" id="foto" type="text" name="foto" autocomplete="off" required />
               <div id="error-foto" className="error-details"></div>
           </div>
            {/* campo de ingreso de ID del producto */}
            <div className="input-group">
               <label for="id">ID</label>
               <input className="entrada" id="id" type="number" name="id" autocomplete="off" disabled />
               <div className="error-details"></div>
           </div>
   
   
           <button className="btnAgregar">Agregar</button>
       </form>
       <hr />
   
       {/* ------------------------------------------------------------------------------- */}
   
       <h2 id="titulo-table">Lista de productos disponibles</h2>
   
       <table></table>
   
   </section>
}

export default Alta
