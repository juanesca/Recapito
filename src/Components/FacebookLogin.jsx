import React from 'react';
import './FacebookLogin.css';

function iniciosesion() {
    return (

        <div className="fl">
        <p>PAGINAS</p>
        <form className="formulario" />
        <h1 className="bg-white"> Inicia sesion con facebook</h1>
        <div className="contenedor" />
        <div className="input-contenedor" />
 
        <input type="text" placeholder="Correo electronico o telefono" className="w-100"/>

        <div className="input-contenedor" />

        <input type="password" placeholder="Contraseña" className="w-100"/>
        <input type="submit" value="Iniciar sesion" className="button" />
        </div>

    )

}

export default iniciosesion;