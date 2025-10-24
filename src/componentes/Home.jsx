import React, { useState, useEffect } from 'react';
import { getData } from '../firebase/auth.js';
import Card from './Card';
import Level from './Level';
import './home.css'
const Home = ({ barajarCartas, 
                cartas, 
                handleClick, 
                puntos, 
                player, 
                nivel,
                letraUno,
                letraDos,
                startNuevoJuego
              }) => {

  const [ dino, setDino ] = useState(0)
  const [ start, setStart ] = useState(false)
  const [chat, setChat] = useState([]);
  
  useEffect(() => {
    // Llamamos a getData y guardamos la función para dejar de escuchar luego
    const unsubscribe =  getData((data) => {
      setChat(data); // actualiza el estado cada vez que cambien los datos
    });

    // Cleanup: dejar de escuchar cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Si llega a 5, mostrar componente y reiniciar
    if (dino === 5) {
      setStart(true);
      setDino(0);
      return;
    }

    // Si dino es distinto de 0, arrancamos el temporizador
    if (dino > 0) {
      const timer = setTimeout(() => {
        setDino(0);
      }, 4000);

      // limpiar timeout si dino cambia antes de que pasen los 5s
      return () => clearTimeout(timer);
    }
  }, [dino]);

  return (
    <div className="contenedor">
      {
        start &&
          <Level 
            setStart={setStart}
            chat={chat}
          />
      }
      <header>
        <section className="section-header">
          <p>{player ? player[0].toUpperCase() + player.slice(1) : 'Jugador'}</p>
        </section>
        <section className="section-header">
          <img src='./img/nombre1.png' alt='' />
        </section>
        <section className="section-header">
          <div className="nivel-puntos">
            <p>NIVEL: </p>
            <p>{nivel}</p>
          </div>
          <div className="nivel-puntos">
            <p>PUNTOS: </p>
            <p> {puntos}</p>
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
                letraUno={letraUno}
                letraDos={letraDos}
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
            fill="currentColor">
              <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
          </svg>
        </button>
        <button
          onClick={() => { startNuevoJuego() }}
          className='btn-reset'
        >
          JUEGO NUEVO
        </button>
        <button
          className="btn-dino"
          onClick={(() => { setDino((prev) => prev + 1)})}
        >
          <img src='/public/img/dino.png' alt="logo web" />
        </button>
      </footer>
    </div>
  )
}
export default Home;