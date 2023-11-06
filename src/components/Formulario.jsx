import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [lista, setLista] = useState([])
    const [editIndex, setEditIndex] = useState(-1)

    const registrar = (e) => {
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
        <div className='container-fluid'>
            <h1 className='text-center mt-3 mb-3 text-warning'>Formulario de creacion de Usuarios</h1>
            <form onSubmit={registrar}>
                <input type="text"
                    className="form-control mb-3"
                    placeholder='Ingrese su nombre'
                    onChange={(e) => (setNombre(e.target.value.trim()))}
                    value={nombre} />
                <input type="text"
                    className="form-control mb-3"
                    placeholder='Ingrese su apellido'
                    onChange={(e) => (setApellido(e.target.value.trim()))}
                    value={apellido} />
                <div className='d-grid gap-2'>
                    <button className='btn btn-outline btn-success' type='submit'>Registrar Usuario</button>
                </div>
            </form>
            <h2 className='text-center mt-5 text-warning'>Lista de usuarios</h2>
            <ol className='list-group table table-warning mb-5'>
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellido</th>
                            <th scope='col'>Editar</th>
                            <th scope='col'>Eliminar</th>
                        </tr>
                    </thead>
                    {
                        lista.map((item, index) => (<tbody>
                            <tr>
                                <th scope='row' >{index + 1}</th>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td><button className="btn btn-warning me-2" onClick={() => editarUsuario(index)}>Editar</button></td>
                                <td><button className="btn btn-danger" onClick={() => eliminarUsuario(index)}>Eliminar</button></td>
                            </tr>

                        </tbody>))
                    }
                </table>
            </ol>
        </div>
    )
}

export default Formulario
