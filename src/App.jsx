import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contactos'
import NavBar from './componentes/NavBar'
import { Datos } from './contextos/Contexto'
import Cajas1 from './flex/Cajas1'
import Asombrado from './flex/Asombrado'
import Lentes from './flex/Lentes'
import Patito from './flex/Patito'
import Grid from './grid/Grid'
import Nombre from './grid/Nombre'
import ListaTareas from './componentes/ListaTareas'
function App() {

  return (
    <>
    <Datos>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contacto />} />
          <Route path='/cajas1' element={<Cajas1/>}/>
          <Route path='/asombrado' element={<Asombrado/>}/>
          <Route path='/lentes' element={<Lentes/>}/>
          <Route path='/patito' element={<Patito/>}/>
          <Route path='/grid' element={<Grid/>}/>
          <Route path='/nombre' element={<Nombre/>}/>
          <Route path='/listaTareas' element={<ListaTareas/>}/>
        </Routes>
      </Router>
    </Datos>
      
    </>
  )
}

export default App
