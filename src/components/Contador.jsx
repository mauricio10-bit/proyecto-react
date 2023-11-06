import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)
    const mas = () => { setContador(contador + 1) }
    const menos = () => { setContador(contador - 1) }
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <h3>
            {
                contador % 2 == 0 ? 'Es par' : 'Es impar'
            }
            </h3>
            <button onClick={mas}>Aumentar valor</button>
            <button onClick={menos}>Disminuir valor</button>
            <button onClick={() => setContador(0)}>Reset</button>
        </div>
    )
}

export default Contador