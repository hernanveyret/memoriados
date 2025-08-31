import { useState, useEffect } from 'react'
import Home from './componentes/Home'
import FormName from './componentes/FormName';
import './App.css'

function App() {
const [ isHome, setIsHome ] = useState(false);
const [ isFormName, setIsFormName ] = useState(true);

const [ player, setPlayer ] = useState('')
const [ cartas, setCartas ] = useState([])
const [ puntos, setPuntos ] = useState(0)
const [ letraUno, setLetraUno ] = useState(null)
const [ letraDos, setLetraDos ] = useState(null)
const [ targetUno, setTargetUno ] = useState(null)
const [ targetDos, setTargetDos ] = useState(null)
const [ aciertos, setAciertos ] = useState(0)
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
  console.log('click')
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
  targetUno && console.log('id 1:',targetUno.id)
  targetDos && console.log('id 2:',targetDos.id)
}, [targetUno, targetDos])

useEffect(() => {
  letraUno && console.log(letraUno);
  letraDos && console.log(letraDos)

  if(letraUno && letraDos){
    if(targetUno && targetDos ){
      if(targetUno===targetDos){
        console.log('hiciste click en la misma carta');
        repetirCarta()
        return
      }else{
        if( letraUno === letraDos ){
          console.log('coincidencia');
          setLetraUno(null)
          setLetraDos(null)
          }else{
          console.log('No hay coincidencia')
          setLetraUno(null)
          setLetraDos(null)
          setTimeout(() => {
            targetUno.classList.remove('flip')
            targetDos.classList.remove('flip')
          }, 1500);        
        }
      }
    }
      
  }
},[letraUno, letraDos, targetUno, targetDos])

const  repetirCarta = () => {
    const audio = new Audio();
    audio.src = "./audio/beeps.mp3";
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
      />
      }
    </div>
  )
}

export default App
