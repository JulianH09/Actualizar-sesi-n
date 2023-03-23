import React from 'react'
import { useState } from 'react'

function Juego() {

    let opc = ['piedra', 'papel', 'tijera'];

    const [human, setHuman] = useState('')
    const [robot, setRobot] = useState('')

    let juegoMaquina = () => {
        let randomOpcMaquina = Math.round(Math.random()*(opc.length-1));
        setRobot(opc[randomOpcMaquina])
    }

    let juegoHuman = (e) => {
        setHuman(e.target.innerText)
        juegoMaquina()
    }

    function ganador () {
        if (human === "piedra" && robot === "tijera") {
            alert("Gano humano")
        } else if (human === "tijera" && robot === "papel") {
            alert("Gano humano")
        } else if (human === "papel" && robot === "piedra") {
            alert("Gano humano")
        } else if (human === robot) {
            alert("Empate")
        }
        else {
            alert("Gano robot")
        } 
    }


  return (
    <div className='Pantalla'>
        <div>
            <h4>Human</h4>
            <h1>{human}</h1>
        </div>
        <div>
            <h4>Robot</h4>
            <h1>{robot}</h1>
        </div>
        <div>
            <button onClick={juegoHuman}>piedra</button>
            <button onClick={juegoHuman}>papel</button>
            <button onClick={juegoHuman}>tijera</button>
            <button onClick={ganador}>Ganador</button>
        </div>
    </div>
  )
}

export default Juego