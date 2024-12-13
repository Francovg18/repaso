import { createContext } from "react";
import { useState } from "react";

export const Contexto = createContext();

export const Datos =({ children })=>{
    const calcularEdad=(fecha)=>{
        const nacimiento = new Date(fecha);
        const hoy = new Date();
        const edadC = hoy.getFullYear()-nacimiento.getFullYear();
            return edadC;
    } 
    
   const [formData, setFormData] = useState({})
   const MayorEdad = calcularEdad(formData.fecha)>=18
    return(
        <Contexto.Provider value={{formData, setFormData, calcularEdad, MayorEdad }}>
            {children}
        </Contexto.Provider>
    )
}