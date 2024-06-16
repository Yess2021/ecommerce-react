import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inicio from "./components/Inicio/Inicio";
import Alta from "./components/Alta/Alta";
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import Favoritos from "./components/Favoritos/Favoritos";
import Registro from "./components/Registro/Registro";
import Carrito from "./components/Carrito/Carrito";
import NoMatch from "./components/NoMatch/NoMatch";
import { useEffect, useState } from "react";
import servicioProductos from "./data/servicioProductos";

const tallas = ["X", "M", "L"];

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [textoAlert, setTextoAlert] = useState("");

  console.log("productos", productos);

  useEffect(() => {
    servicioProductos.getAll().then((prod) => setProductos(prod));
  }, []);

  const mostrarAlert = (texto) => setTextoAlert(texto);

  const agregar = (producto, tallaSeleccionada, colorSeleccionado) => {
    const productoId = producto.id;
    const tallaIndex = tallas.indexOf(tallaSeleccionada);
    const colorIndex = producto.colores[0].indexOf(colorSeleccionado);

    const productoModificado = producto;
    const stockActual = productoModificado.stock[tallaIndex][colorIndex];
    productoModificado.stock[tallaIndex][colorIndex] = (
      Number(stockActual) - 1
    ).toString();

    setProductos((productosExistentes) =>
      productosExistentes.map((producto) =>
        producto.id === productoId ? productoModificado : producto
      )
    );

    // Falta descontar del stock al agregar

    const productoAgregado = {
      ...producto,
      datosCompra: {
        talla: tallaSeleccionada,
        tallaIndex: tallaIndex,
        color: colorSeleccionado,
        colorIndex: colorIndex,
        cantidad: 1,
      },
    };

    setCarrito((carritoAnterior) => [...carritoAnterior, productoAgregado]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout textoAlert={textoAlert} contadorCarrito={carrito.length} />
          }
        >
          <Route
            index
            element={
              <Inicio
                productos={productos}
                favoritos={favoritos}
                mostrarAlert={mostrarAlert}
                agregar={agregar}
              />
            }
          />
          <Route path="alta" element={<Alta />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="registro" element={<Registro />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
