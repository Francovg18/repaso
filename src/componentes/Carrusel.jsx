import React, { useRef, useState, useEffect } from 'react'
import { data } from '../assets/data'

function Carrusel() {
    const lista = useRef();
    const [indice, setIndice] = useState(0);

    useEffect(()=>{
        const listaNodo = lista.current;
        const imgNodo = listaNodo.querySelectorAll('li >img')[indice]

        if(imgNodo){
            imgNodo.scrollIntoView({
                behavior:'smooth'
            })
        }
    }, [indice])

    const cambiarImagen = (direccion) => {
        setIndice((curr) => {
            if (direccion === 'atras') {
                return curr === 0 ? data.length - 1 : curr - 1; 
            } else {
                return curr === data.length - 1 ? 0 : curr + 1; 
            }
        });
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((curr) => (curr === data.length - 1 ? 0 : curr + 1)); 
        }, 10000);
    
        return () => clearInterval(intervalo); 
    }, []);
  return (
    <>
        <div className='contenedor-principal'>
            <div className='contenedor-carrusel'>
                <div className='izquierda' onClick={()=>cambiarImagen('atras')}>
                    &#10092;
                </div>
                <div className='derecha' onClick={()=>cambiarImagen('siguiente')}>
                    &#10093;
                </div>
                <div className='contenedor-imagen'>
                    <ul ref={lista}>
                        {
                            data.map((item)=>{
                                return(
                                    <li key={item.id}>
                                        <img src={item.imgUrl} width={600} height={350} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    </>
  )
}

export default Carrusel