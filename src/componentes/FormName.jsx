import React from 'react';
import './formName.css';

const FormName = ({startGame}) => {
  return (
    <div className="contenedor-form-name">
      <form className="form-game" onSubmit={startGame}>
        <h1 className="titulo">Ingresá tu nombre</h1>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Jugador..." 
          className="input-name"
        />
        <button type="submit" className="btn-start">
          COMENZAR
        </button>
      </form>
    </div>
  );
};

export default FormName;
