import React from 'react';
import './explosionConfeti.css';
const ExplosionConfeti = ({setIsConfeti}) => {
  return (
    <div className='contenedor-confeti'>
      <div className='contenedor'>
      <img src='./img/congratulations.gif' alt='Explosion confeti' />
        <div className='btn-contenedor'>
          <button
           onClick={() => { setIsConfeti(false) }}
          >SIGUIENTE</button>
        </div>
      </div>
    </div>
  )
};
export default ExplosionConfeti;