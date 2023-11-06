import React from 'react'

const Variables = () => {
    const nombre = "Mauricio"
    const edad = "21"
    const url = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
  return (
    <div>
        <h1>Nombre: {nombre}</h1>
        <h2>Edad: {edad}</h2>
        <img src={url} alt="" />
    </div>
  )
}

export default Variables