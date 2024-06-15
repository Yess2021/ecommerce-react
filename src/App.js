import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Inicio from './components/Inicio/Inicio'
import Alta from './components/Alta/Alta'
import Contacto from './components/Contacto/Contacto'

function App() {
  return (
    <div className="App">
      Hola
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="alta" element={<Alta />} />
          <Route path="contacto" element={<Contacto />} />
          {/* <Route path="nosotros" element={<Nosotros />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="registro" element={<Registro />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
