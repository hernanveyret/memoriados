import { useState, useEffect } from 'react'
import Home from './componentes/Home'
import FormName from './componentes/FormName';
import ExplosionConfeti from './componentes/ExplosionConfeti';
import './App.css'

function App() {
const [ isHome, setIsHome ] = useState(false);
const [ isFormName, setIsFormName ] = useState(true);
const [ isConfeti, setIsConfeti ] = useState(false);

const [ player, setPlayer ] = useState('')
const [ cartas, setCartas ] = useState([])
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

const startGame = (e) => {
  const nombre = e.target.nombre.value;
  setPlayer(nombre);
  e.preventDefault()
  setIsFormName(false)
  setIsHome(true)
  barajarCartas()
}
// Baraja nuevamente las cartas y da vuelta las que estaban al revez
const barajarCartas = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => {
    if(c.classList.contains('flip')){
      c.classList.remove('flip')
    }
  })
  setTimeout(() => {
    let mazo = personajes.sort(() => Math.random() - 0.5 )
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
    barajarCartas();
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
      />
      }
      {
        isConfeti && 
        <ExplosionConfeti
        setIsConfeti={setIsConfeti}
        />
      }
    </div>
  )
}

export default App
