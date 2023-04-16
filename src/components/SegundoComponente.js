import React from 'react'

export const SegundoComponente = () => {

    let hobbies = [
        "Música",
        "Videojuegos",
        "Programación",
        "Fotografía",
        "Ciclismo"
    ];

  return (
    <div>
        <h1>¡Bienvenidos a SegundoComponente!</h1>
        <h3>Desarrollo: Sebastián Barrientos</h3>
        <img src='https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20230106161700://media.timeout.com/images/105240237/image.jpg'></img>
        <div>
            <h3>Mis intereses:</h3>
            <ul>
                {
                    hobbies.map( (hobby, indice) => {
                        return (<li key={indice}>
                            {hobby}
                        </li>);
                    })
                }
            </ul>
        </div>
    </div>
  )
}
