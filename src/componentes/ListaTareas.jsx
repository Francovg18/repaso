import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]); // Estado para la lista de tareas
  const [nuevaTarea, setNuevaTarea] = useState(''); // Estado para la tarea nueva

  // Función para añadir una tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return; // Evitar añadir tareas vacías
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]); // Añadir tarea al estado
    setNuevaTarea(''); // Limpiar el input
  };

  // Función para eliminar una tarea por índice
  const eliminarTarea = (indice) => {
    setTareas(tareas.filter((_, i) => i !== indice));
  };

  // Función para alternar el estado de completada de una tarea
  const alternarTarea = (indice) => {
    setTareas(
      tareas.map((tarea, i) =>
        i === indice ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  // Función para eliminar todas las tareas
  const eliminarTodas = () => {
    setTareas([]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea"
          style={{ padding: '5px', fontSize: '16px', marginRight: '10px' }}
        />
        <button onClick={agregarTarea} style={{ padding: '5px 10px', fontSize: '16px' }}>
          Agregar
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {tareas.map((tarea, indice) => (
          <li
            key={indice}
            style={{
              textDecoration: tarea.completada ? 'line-through' : 'none',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          >
            <span onClick={() => alternarTarea(indice)}>{tarea.texto}</span>
            <button
              onClick={() => eliminarTarea(indice)}
              style={{
                marginLeft: '10px',
                padding: '2px 5px',
                fontSize: '14px',
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      {tareas.length > 0 && (
        <button
          onClick={eliminarTodas}
          style={{ padding: '5px 10px', fontSize: '16px', marginTop: '20px' }}
        >
          Eliminar Todas
        </button>
      )}
    </div>
  );
}

export default ListaTareas;
