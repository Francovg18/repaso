import React from 'react'
import { useContext } from 'react'
import { Contexto } from '../contextos/Contexto'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Nosotros() {
    const {formData, calcularEdad, MayorEdad} = useContext(Contexto)
  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Datos del usuario: </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Nombre: {formData.nombre}</p>
          <p>Correo: {formData.correo}</p>
          <p>{calcularEdad(formData.fecha)}</p>
          <p>{MayorEdad?'es mayor edad': 'es menor de edad'}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default Nosotros