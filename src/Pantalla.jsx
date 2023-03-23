import React from 'react'
import { useState } from 'react'

function Pantalla() {

    const [contador, setContador] = useState(0)

    let aumentar = function (){
        setContador(contador + 1)
    }
    
    let decrementar = function (){
        setContador(contador - 1)
        {parar()}
    }

    let parar = function(){
        if (contador <= 0) {
            setContador(0)
        }
    }

    return (
        <div className="App">
            <h1>{contador}</h1>
            <button onClick={aumentar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Pantalla