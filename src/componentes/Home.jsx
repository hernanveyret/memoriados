import React, { useState, useEffect } from 'react';
import Card from './Card';
import './home.css'
const Home = ({ barajarCartas, cartas, handleClick, puntos, player }) => {

  return (
    <div className="contenedor">
      <header>
        <section className="section-header">
          <p>{player && player[0].toUpperCase() + player.slice(1)}</p>
        </section>
        <section className="section-header">
          <img src='./img/nombre1.png' alt='' />
        </section>
        <section className="section-header">
          <div className="nivel-puntos">
            <p>NIVEL:</p>
            <p>1</p>
          </div>
          <div className="nivel-puntos">
            <p>PUNTOS: </p>
            <p>{puntos}</p>
          </div>
        </section>
      </header>
      <main>
          {
            cartas.map((c, i) => (
              <div className="card" key={i}>
                <Card 
                url={c.url} 
                alt={c.nombre} 
                letraId={c.id} 
                handleClick={handleClick} 
                indice={i}
                />
              </div>
            ))
          }
      </main>
      <footer>
        <button
        type="button"
        onClick={() => barajarCartas()}
          className='btn-reset'
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#FFFF55">
              <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
          </svg>
        </button>
      </footer>
    </div>
  )
}
export default Home;