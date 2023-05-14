import React from "react";

//Se recomienda crear la carpeta de componentes y llamarla
//tal cual, "components".

//Los componentes deben de llevar en su nombre al inicio mayusculas inicial
//es obligatiorio

//Todo componente debe de tener un export default
//Todo componente puede tener mas de un componente

export default function HolaMundo() {
    const mifuncion = () => {
        alert("Hola mundo con una funcion 🖐️");
    }



    return(
        <div>
            <h1>Hola mundo</h1>
            <h2>Usando componentes</h2>
            <img src="/img/pochita.png" alt="pochita" height={300} width={300}></img>
        </div>
    );
}

//Se puede hacer eso, o incluir en el nombre directamente
//export default HolaMundo;

export function AdiosMundo() {
    return(
        <div>
            <h3>Adios a todos! 👐</h3>
        </div>
    );
}