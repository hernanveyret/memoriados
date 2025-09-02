import React from 'react';
import './explosionConfeti.css';
const ExplosionConfeti = ({ setIsConfeti, 
                            barajarCartas,
                            setIsLevel
                          }) => {

const continuarJuego = () => {
  setIsConfeti(false);
  setIsLevel(true);
  setTimeout(() => {
    setIsLevel(false)
    barajarCartas()
  },3000)
}
  return (
    <div className='contenedor-confeti'>
      <div className='contenedor'>
      <img src='./img/congratulations.gif' alt='Explosion confeti' />
        <div className='btn-contenedor'>
          <button
           onClick={() => { continuarJuego() }}
          >SIGUIENTE</button>
        </div>
      </div>
    </div>
  )
};
export default ExplosionConfeti;