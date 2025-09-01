import React from 'react';
import './card.css';

const Card = ({ url, 
                nombre, 
                letraId, 
                handleClick, 
                indice,
                letraUno,
                letraDos
              }) => {
  return (
    <div 
    type="button"
    onClick={(e) => { 
      handleClick(e.currentTarget)
    }}
    data-id={letraId}
    id={indice+letraId}
    className="card">
      <div className="contenedor-img">
        <div className="front">
          <img src={url} alt={nombre} />
        </div>
        <div className="back">
          <img src="./img/cartas/dorsoCartas.webp" alt="Dorso carta" />
        </div>
      </div>
    </div>
  );
};

export default Card;
