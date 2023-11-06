import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [lista, setLista] = useState([])
    const [editIndex, setEditIndex] = useState(-1)
  
    const registrarDatos = (e) => {
      e.preventDefault()
  
      if (!nombre) return alert('Ingrese Nombre')
      if (!apellido) return alert('Ingrese Apellido')
  
      if (editIndex !== -1) {
        const nuevaLista = lista.map((item, index) =>
          index === editIndex ? { nombre, apellido } : item
        )
        setLista(nuevaLista)
        setEditIndex(-1)
  
      } else {
        const usuarioExistente = lista.find(
          (usuario) => usuario.nombre === nombre & usuario.apellido === apellido
  
        )
  
        if (usuarioExistente) {
          alert('El usuario ya ha sido registrado previamente.')
          return
        }
  
        setLista([...lista, { nombre, apellido }])
      }
  
      e.target.reset()
      setNombre('')
      setApellido('')
    }
  
    const eliminarUsuario = (index) => {
      const nuevaLista = lista.filter((_, i) => i !== index)
      setLista(nuevaLista)
    }
  
    const editarUsuario = (index) => {
      const usuario = lista[index]
      setNombre(usuario.nombre)
      setApellido(usuario.apellido)
      setEditIndex(index)
    }
  
    return (
      <div>
        <h2 className="text-center text-warning">Formulario de Creación de Usuarios</h2>
        <form onSubmit={registrarDatos}>
  
        <input type="text" 
          placeholder='Ingrese su Nombre'
          className='form-control mb-3'
          onChange={(e)=>(setNombre(e.target.value.trim()))}
          value={nombre}
          />
  
          <input type="text" 
          placeholder='Ingrese su Apellido'
          className='form-control mb-3'
          onChange={(e)=>(setApellido(e.target.value.trim()))}
          value={apellido}
          />
  
          <div className='d-grid gap-2'>
          <button className='btn btn-success' type='submit'>Registrar</button>
          </div>
  
        </form>
        <h2 className="text-center text-warning mt-5">Lista de Usuarios Registrados</h2>
        <ol className="list-group">
          {
              lista.map((item, index) => 
                  (<li key={index} className="list-group-item list-group-item-warning">{item.nombre} {item.apellido}
                      <button className="btn btn-danger float-end" onClick={() => eliminarUsuario(index)}>Eliminar</button>
                      <button className="btn btn-primary float-end me-2" onClick={() => editarUsuario(index)}>Editar</button>
                  </li>))
          }
        </ol>
      </div>
    )
  }

export default Formulario