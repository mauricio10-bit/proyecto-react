import React from 'react'

const Eventos = () => {
    const click=()=>{console.log('Hiciste click');}
    return (
        <div>
            <h1>Eventos</h1>
            <button onClick={click}>Haz click</button>
        </div>
    )
}

export default Eventos