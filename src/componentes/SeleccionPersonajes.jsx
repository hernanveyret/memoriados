import React from 'react';
import './seleccionPersonajes.css';
const SeleccionPersonajes = ({setIsSelectPersonaje, setIsFormName, setIsTuSeleccion}) => {
  return (
    <div className='contenedor-seleccion-personajes'>
      <h1>Selecciona un personaje</h1>
      <section>
        <div className="card-dos" 
          onClick={() => {
            setIsSelectPersonaje(false);
            setIsFormName(true);
            setIsTuSeleccion(true)
          }}
        >
        <img src='./img/cartas/mirabel1.jpg' alt='Carta maribel' />
      </div>
      <div className="card-dos" 
        onClick={() => {
            setIsSelectPersonaje(false)
            setIsFormName(true);
            setIsTuSeleccion(false)
          }}
      >
        <img src='./img/cartas/bm03.jpg' alt='Blippi y Meeka' />
      </div> 
      <div className="card-dos" 
        onClick={() => {
            setIsSelectPersonaje(false)
            setIsFormName(true);
            setIsTuSeleccion(null)
          }}
      >
        <img src='./img/cartas/hun1.jpg' alt='Huntrix' />
      </div>       
      </section>
      
    </div>
  )
};
export default SeleccionPersonajes;