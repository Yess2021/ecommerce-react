import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Inicio from './components/Inicio/Inicio'
import Alta from './components/Alta/Alta'
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'
import Favoritos from './components/Favoritos/Favoritos'
import Registro from './components/Registro/Registro'
import Carrito from './components/Carrito/Carrito'
import NoMatch from './components/NoMatch/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
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
