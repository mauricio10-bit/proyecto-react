import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compclase from './components/Compclase'
import Variables from './components/Variables'
import Eventos from './components/Eventos'
import Contador from './components/contador'
import Listas from './components/Listas'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)
  const style = "active"
  const contenido = "Buenas tardes"
  return (
    <div className='container'>
      <Formulario />
    </div>
  )
}

export default App
