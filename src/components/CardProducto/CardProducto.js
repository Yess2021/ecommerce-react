import { useState } from "react";
import "./CardProducto.css";

const tallas = ["X", "M", "L"];

const CardProducto = ({ producto, favoritos, agregar }) => {
  const [tallaSeleccionada, setTallaSeleccionada] = useState()
  const [tallaExistencia, setTallaExistencia] = useState([])
  const [colorSeleccionado, setColorSeleccionado] = useState()

  const tallasExistencia = (index) => {
    const sum = producto.stock[index].reduce((acc, value) => acc + Number(value),
    0)
    return sum > 0
  }
  const seleccionarTalla = (tallaIndex) => {
    setTallaExistencia(producto.stock[tallaIndex])
    setTallaSeleccionada(tallas[tallaIndex])
    setColorSeleccionado()
  }

  const agregarAlCarrito = () => {
    agregar(producto, tallaSeleccionada, colorSeleccionado)
    setTallaSeleccionada()
    setTallaExistencia([])
    setColorSeleccionado()
  }

  return (
    <section className="card-container" id={`cc-${producto.id}`}>
      <img src={producto.foto} />
      <button
        className="favoritosIcon"
        id={`agregarFavoritos-${producto.nombre}`}
        value={producto.nombre}
      >
        <img
          id={`img-${producto.nombre}`}
          src={
            favoritos.includes(producto.nombre)
              ? "icons/favorite-checked.svg"
              : "icons/favorite.svg"
          }
        />
      </button>
      <h4>{producto.nombre}</h4>
      <p>{producto.detalles}</p>
      <p>${producto.precio.toLocaleString()}</p>
      <p className="tallasContainer">
        {tallas.map((talla, index) =>
          tallasExistencia(index) ? (
            <button
              key={index}
              className="tallas tallaSeleccionar"
              style={{fontWeight: talla === tallaSeleccionada ? 'bold' : 'normal'}}
              id={`${producto.id + "," + talla}`}
              onClick={() => seleccionarTalla(index)}
            >
              {talla}
            </button>
          ) : (
            <button
              key={index}
              className="tallas"
              id={`${producto.id + "," + talla}`}
              style={{ opacity: "35%" }}
            >
              {talla}
            </button>
          )
        )}
      </p>
      <div className="colores-container">
        {producto.colores[0].map((color, index) =>
          tallaExistencia[index] !== '0' ? (
            <div
              key={index}
              className="colores"
              id={`${producto.id + "," + index}`}
              style={{ backgroundColor: color }}
              onClick={()=> setColorSeleccionado(color)}
            ></div>
          ) : (
            <div
              key={index}
              className="colores"
              id={`${producto.id + "," + index}`}
              style={{ opacity: "10%", backgroundColor: color }}
            ></div>
          )
        )}
      </div>
      <button id={`btnComprar-${producto.id}`} disabled={!tallaSeleccionada || !colorSeleccionado} onClick={agregarAlCarrito}>
        Agregar al Carrito
      </button>
    </section>
  );
};

export default CardProducto;
