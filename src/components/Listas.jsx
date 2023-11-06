import React from 'react'

const Listas = () => {
    const array = ['Futbol', 'Basquetball', 'Tennis', 'Golf']
    const usuarios = [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'Pedro' },
        { id: 3, name: 'Jesus' },
        { id: 4, name: 'Jose' },
        { id: 5, name: 'Santiago' }
    ]

    const [lista, setLista] = React.useState(array)
    const [listaObj, setListaObj] = React.useState(usuarios)
    const agregar = () => {
        setListaObj([
            ...listaObj,
            { id: 6, name: 'Mauricio' }
        ])
    }

    return (
        <div>
            <h2>Listas</h2>
            <ol>
                {
                    lista.map((item, index) => (<li key={index}>{item}</li>))
                }
            </ol>
            <button onClick={agregar}>Agregar Usuario</button>
            <h3>Lista de usuarios</h3>
            <ul>
                {
                    listaObj.map(({ id, name }) => (<li key={id}>{name}</li>))
                }
            </ul>
        </div>
    )
}

export default Listas