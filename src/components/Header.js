// Header.js
import React, {useState} from 'react';

function Header() {
    return (
        <div>
        <header id="Opciones">
            <h1>CINECITO</h1>
            <nav>
                <ul>
                    <li className="square-list-item"><a target="_blank" href="https://www.google.com/"> CARTELERA</a></li>
                    <li className="square-list-item"><a>TEATROS</a></li>
                    <li className="square-list-item"><a>CONFITERÍA</a></li>
                    <li className="square-list-item"><a>PROMOCIONES</a></li>
                    <li className="square-list-item"><a>MEMBRESÍAS</a></li>
                </ul>
            </nav>
            <hr/>

            <header id="Usuario" >
                <div className="user-links">
                    <a href="/iniciar-sesion">Iniciar Sesión</a>
                    <a href="/crear-cuenta">Crear cuenta</a>
                </div>
            </header>
        </header>

        </div>
    );
}

export default Header;
