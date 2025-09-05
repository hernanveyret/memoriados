import { useState, useEffect } from 'react'
import Home from './componentes/Home'
import FormName from './componentes/FormName';
import ExplosionConfeti from './componentes/ExplosionConfeti';
import Nivel from './componentes/Nivel';
import SeleccionPersonajes from './componentes/SeleccionPersonajes';
import './App.css'

function App() {
const [ isHome, setIsHome ] = useState(false);
const [ isFormName, setIsFormName ] = useState(false);
const [ isConfeti, setIsConfeti ] = useState(false);
const [ isLevel, setIsLevel ] = useState(false);
const [ isSelectPersonaje, setIsSelectPersonaje ] = useState(true);
const [ isTuSeleccion, setIsTuSeleccion ] = useState(null);

const [ player, setPlayer ] = useState('')
const [ cartas, setCartas ] = useState([])
const [ personajeSeleccionado, setPersonajeSeleccionado ] = useState([]);
const [ puntos, setPuntos ] = useState(0)
const [ nivel, setNivel ] = useState(1);
const [ letraUno, setLetraUno ] = useState(null)
const [ letraDos, setLetraDos ] = useState(null)
const [ targetUno, setTargetUno ] = useState(null)
const [ targetDos, setTargetDos ] = useState(null)
const [ aciertos, setAciertos ] = useState(0)
const [ erradas, setErradas ] = useState(0);
const [ acertadas, setAcertadas ] = useState([])
const personajes = [
  {
    id: 'c',
    nombre: 'Bruno',
    url: './img/cartas/bruno1.jpg'
  },
  {
    id: 'j',
    nombre: 'Pepa',
    url: './img/cartas/pepa1.jpg'
  },
  {
    id: 'a',
    nombre: 'Abuela',
    url: './img/cartas/abuela1.jpg'
  },
  {
    id: 'g',
    nombre: 'julieta',
    url: './img/cartas/julieta1.jpg'
  },
  {
    id: 'h',
    nombre: 'Luisa',
    url: './img/cartas/luisa1.jpg'
  },
  {
    id: 'f',
    nombre: 'Isabela',
    url: './img/cartas/isabela1.jpg'
  },
  {
    id: 'i',
    nombre: 'Mirabel',
    url: './img/cartas/mirabel1.jpg'
  },
  {
    id: 'c',
    nombre: 'Antonio',
    url: './img/cartas/bruno1.jpg'
  },
  {
    id: 'j',
    nombre: 'Pepa',
    url: './img/cartas/pepa1.jpg'
  },
  {
    id: 'b',
    nombre: 'Antonio',
    url: './img/cartas/antonio1.jpg'
  },
  {
    id: 'e',
    nombre: 'Dolores',
    url: './img/cartas/dolores1.jpg'
  },
  {
    id: 'h',
    nombre: 'Luisa',
    url: './img/cartas/luisa1.jpg'
  },
  {
    id: 'f',
    nombre: 'Isabela',
    url: './img/cartas/isabela1.jpg'
  },
  {
    id: 'i',
    nombre: 'Mirabel',
    url: './img/cartas/mirabel1.jpg'
  },
  {
    id: 'a',
    nombre: 'Abuela',
    url: './img/cartas/abuela1.jpg'
  },
  {
    id: 'g',
    nombre: 'Julieta',
    url: './img/cartas/julieta1.jpg'
  },
  {
    id: 'e',
    nombre: 'Dolores',
    url: './img/cartas/dolores1.jpg'
  },
  {
    id: 'b',
    nombre: 'Antonio',
    url: './img/cartas/antonio1.jpg'
  },
  {
    id: 'd',
    nombre: 'Camilo',
    url: './img/cartas/camilo1.jpg'
  },
  {
    id: 'd',
    nombre: 'Camilo',
    url: './img/cartas/camilo1.jpg'
  }
];
const personajesBM = [
  { id: 'a', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm01.jpg' 
  },
  { id: 'f', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm06.jpg' 
  },
  { id: 'j', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm10.jpg' 
  },
  { id: 'c', nombre: 
    'Blippi y Meeka',
     url: './img/cartas/bm03.jpg' 
    },
  { id: 'h', 
    nombre: 'Blippi y Meeka',
     url: './img/cartas/bm08.jpg' 
    },
  { id: 'e', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm05.jpg' 
  },
  { id: 'g', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm07.jpg' 
  },
  { id: 'b', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm02.jpg' 
  },
  { id: 'd', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm04.jpg' 
  },
  { id: 'i', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm09.jpg' 
  },

  { id: 'c', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm03.jpg' 
  },
  { id: 'b', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm02.jpg' 
  },
  { id: 'e', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm05.jpg' 
  },
  { id: 'a', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm01.jpg' 
  },
  { id: 'h', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm08.jpg' 
  },
  { id: 'g', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm07.jpg' 
  },
  { id: 'i', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm09.jpg' 
  },
  { id: 'd', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm04.jpg' 
  },
  { id: 'f', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm06.jpg' 
  },
  { id: 'j', 
    nombre: 'Blippi y Meeka', 
    url: './img/cartas/bm10.jpg' 
  },
];

const startNuevoJuego = () => {
  setIsHome(false)
  setIsFormName(false)
  setIsConfeti(false)
  setIsLevel(false)
  setIsTuSeleccion(false)
  setIsSelectPersonaje(true)
  setPuntos(0)
  setNivel(1)
}

const startGame = (e) => {
  const nombre = e.target.nombre.value;
  setPlayer(nombre);
  e.preventDefault()
  setIsFormName(false)
  setIsHome(true)
  setIsLevel(true);
  setTimeout(() => {
    setIsLevel(false);
    barajarCartas()
  }, 3000); 
 
}

useEffect(() => {
  if(isTuSeleccion === false ){
    
    setPersonajeSeleccionado(personajesBM)
  }else{
    
    setPersonajeSeleccionado(personajes)
  }
},[isTuSeleccion])

// Baraja nuevamente las cartas y da vuelta las que estaban al revez
const barajarCartas = () => {  
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => {
    if(c.classList.contains('flip')){
      c.classList.remove('flip')
    }
  })
  setTimeout(() => {
    let mazo = personajeSeleccionado.sort(() => Math.random() - 0.5 )
    setCartas(mazo)
  },1000)
};


const handleClick = (target) => {
  let letraId = target.dataset.id;
  //console.log('letra id: ', letraId)
  const filter = acertadas.some(e => e === letraId)
  //console.log(filter)
 if(filter){
  sonidoRepetirCarta();
  //console.log('ya jugaste esa carta');
  return
 }
  if(!letraUno){
    setLetraUno(letraId)
    setTargetUno(target)
  }else{
    setLetraDos(letraId);
    setTargetDos(target)
  
  }
  
  //console.log(letraId)
  //console.log(target)
  //console.log(letraId)
  target.classList.add('flip')
}

useEffect(() => {
  if(aciertos === 10){
    let subTotal = 100 - (erradas * 100  ) / 100
    setPuntos((prev) => prev + subTotal)
    setNivel((prev) => prev + 1)
    setIsConfeti(true);
    setLetraUno(null)
    setLetraDos(null)
    setAciertos(0)
    setTargetUno(null)
    setTargetDos(null)
    setAcertadas([]);
    setErradas(0)
    //barajarCartas();
  }
},[aciertos])

useEffect(() => {
  if(letraUno && letraDos){
    if(targetUno && targetDos ){
      if(targetUno===targetDos){
        //console.log('hiciste click en la misma carta');
        sonidoRepetirCarta()
        return
      }else{
        if( letraUno === letraDos ){
          //console.log('coincidencia');
          sonidoAciertoCarta()
          setLetraUno(null)
          setLetraDos(null)
          setAciertos((prev) => prev + 1)
          setAcertadas([...acertadas, letraUno])
          }else{
          //console.log('No hay coincidencia')
          setLetraUno(null)
          setLetraDos(null)
          setErradas((prev) => prev + 1 )
          setTimeout(() => {
            targetUno.classList.remove('flip')
            targetDos.classList.remove('flip')
            
          }, 1500);      
          setTargetUno(null)
          setTargetDos(null)  
        }
      }
    }
      
  }
},[letraUno, letraDos, targetUno, targetDos])

const  sonidoRepetirCarta = () => {
    const audio = new Audio();
    audio.src = "./audio/beeps.mp3";
    audio.play();
}

const  sonidoAciertoCarta = () => {
    const audio = new Audio();
    audio.src = "./audio/acierto.wav";
    audio.play();
}
return (
    <div className="conetendor-app">
      { 
        isSelectPersonaje &&
        <SeleccionPersonajes 
        setIsSelectPersonaje={setIsSelectPersonaje}
        setIsFormName={setIsFormName}
        setIsTuSeleccion={setIsTuSeleccion}
        />
      }
      {
        isFormName && 
        <FormName 
        startGame={startGame}
        />
      }
      {
        isHome && 
        <Home
        barajarCartas={barajarCartas}
        cartas={cartas}
        handleClick={handleClick}
        puntos={puntos}
        player={player}
        nivel={nivel}
        letraUno={letraUno}
        letraDos={letraDos}
        startNuevoJuego={startNuevoJuego}
      />
      }
      {
        isConfeti && 
        <ExplosionConfeti
        setIsConfeti={setIsConfeti}
        barajarCartas={barajarCartas}
        setIsLevel={setIsLevel}
        />
      }
        {
        isLevel &&
          <Nivel nivel={nivel}/>
      }
     
    </div>
  )
}

export default App
