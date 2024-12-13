import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import { Contexto } from '../contextos/Contexto';
function FormularioS() {
    const {nombre, setNombre, fecha, setFecha, nota, setNota} = useContext(Contexto);

    const [valido, setValido] = useState(false);

    useEffect(()=>{
        if(nombre.trim()&&fecha&&nota){
            setValido(true);
        }else{
            setValido(false);
        }
    }, [nombre, fecha, nota])

    const enviar=(e)=>{
        e.preventDefault();
        alert("form enviado")
    }
  return (
    <>
    <div className='contenedor'>
        
        <form className='form' onSubmit={enviar}>
        <h1>Formulario</h1>
            <div className='fila'>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='fila'>
                <label htmlFor="fecha">fecha</label>
                <input 
                    type="date"
                    id="fecha"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            <div className='fila'>
                <label htmlFor="nota">nota</label>
                <input 
                    type="number"
                    id="nota"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                />
            </div>
            <button
                type="submit"
                disabled={!valido}
            >
                Enviar
            </button>
        </form>
    </div>
    </>
  )
}

export default FormularioS