import React from 'react';
import './nivel.css';

const Nivel = ({nivel}) => {
  return (
    <div className="contenedor-nivel">
      <div className='box'>
      <h1>Nivel {nivel}</h1>
      </div>
    </div>
  )
};
export default Nivel