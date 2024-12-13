import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { Contexto } from '../contextos/Contexto'
import { useNavigate } from 'react-router-dom'
function FormEjemplo() {
    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm()
    const {setFormData} = useContext(Contexto)
    const navigate = useNavigate(); 

    const enviar= handleSubmit((data)=>{
        setFormData(data);
        navigate('/nosotros');
        reset();
    })
  return (
    <>
    <div className='contenedor'>
        <form onSubmit={enviar}>
            <div className='fila'>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text"
                    {...register("nombre",{
                        required:{
                            value:true,
                            message:'Nombre es requerido'
                        },
                        maxLength:{
                            value:10,
                            message:'No mas de 10 caracteres'
                        },
                        minLength:{
                            value:2,
                            message:'Minimo 2 caracteres'
                        }
                    })} 
                />
                {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>

            <div className='fila'>
                <label htmlFor="correo">correo</label>
                <input 
                    type="email"
                    {...register("correo")} 
                />
            </div>

            <div className='fila'>
                <label htmlFor="password">password</label>
                <input 
                    type="text"
                    {...register("password", {
                        required:{
                            value:true,
                            message:'Contraseña es requerida'
                        },
                        minLength:{
                            value:4,
                            message:'Minimo 4 caracteres'
                        }
                    })}
                />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div className='fila'>
                <label htmlFor="confirmaContra">confirmaContraseña</label>
                <input 
                    type="text"
                    {...register("confirmaContra", {
                        required:{
                            value:true,
                            message:'Confirma tu contraseña!!'
                        }, 
                        validate:(value)=>{
                            return value === watch('password') || 'Las contraseñas no coinciden'
                        }
                    })} 
                />
                {errors.confirmaContra && <span>{errors.confirmaContra.message}</span>}
            </div>

            <div className='fila'>
                    <label htmlFor="fecha">Fecha Nacimiento</label>
                    <input 
                        type="date" 
                        {...register("fecha", {
                            required:{
                                value:true,
                                message:'Fecha es requerida'
                            },
                            validate:(fecha)=>{
                                const nacimiento = new Date(fecha);
                                const hoy = new Date();
                                const edad = hoy.getFullYear()-nacimiento.getFullYear();

                                return edad>=18 || 'Debes ser mayor de edad'
                            }
                        })}
                    />
                    {
                        errors.fecha && <span>{errors.fecha.message}</span>
                    }
            </div>

            <button type='submit'>Enviar</button>
        </form>
    </div>
    </>
  )
}

export default FormEjemplo