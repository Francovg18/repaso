import React from 'react'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
    <>
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contactos">Contacto</Link>
        <NavDropdown title="Flex" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link}to='/cajas1'>Cajitas 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/asombrado'>Carita Asombrado</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='lentes'>Carita cool</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='patito'>Patito</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='grid'>Grid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='nombre'>Grid nombre</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='listaTareas'>ToDoList</NavDropdown.Item>

        </NavDropdown>
    </nav>
    </>
  )
}

export default NavBar