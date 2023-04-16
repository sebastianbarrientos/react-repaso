import React, {useState} from 'react';

export const PrimerComponente = () => {
  
    //let nombre = "Sebastián Barrientos";
    let github = "https://github.com/sebastianbarrientos/";

    const [nombre, setNombre] = useState("Sebastián Barrientos");

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    };

    return (
    <div>
        <h1>¡Bienvenidos a PrimerComponente!</h1>
        <h3>Mi nombre es: <strong className={nombre.length >= 7 ? 'verde':'rojo'}>{nombre}</strong></h3>
        <div>
        <input type='text' onChange={e => {cambiarNombre(e.target.value)}} placeholder='Cambia el nombre'/>
        <button onClick={e => {
            console.log('El valor guardado en el estado es: ', nombre);
        }}>Mostrar el valor del estado</button>
        <button onClick={ e => cambiarNombre("SEBASTIÁN BARRIENTOS") }>Cambiar Nombre</button>
        </div>
        <h3><a href={github}>¡Visita mi Github!</a></h3>
        <img src='https://media.timeout.com/images/105240237/image.jpg' width={1024} height={750}></img>
    </div>
  )
}
