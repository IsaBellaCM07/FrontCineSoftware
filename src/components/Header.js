// Header.js
import React from 'react';
import {useLocation} from 'react-router-dom';
import '../styles/HeaderStyle.css';

function Header() {

    const location = useLocation();

    if(location.pathname==="/iniciar-sesion"){
        return null;
    }

    return (
        <div>
            <div>
                <header id="usuario">
                    <div className="user-links">
                        <a href="/iniciar-sesion">Iniciar Sesión</a>
                        <a href="/crear-cuenta">Crear cuenta</a>
                    </div>
                </header>
            </div>
            <div>
                <header id="opciones">
                    <h1>CINECITO</h1>
                    <nav>
                        <ul>
                            <li className="square-list-item"><a> CARTELERA</a></li>
                            <li className="square-list-item"><a>TEATROS</a></li>
                            <li className="square-list-item"><a>CONFITERÍA</a></li>
                            <li className="square-list-item"><a>PROMOCIONES</a></li>
                            <li className="square-list-item"><a>MEMBRESÍAS</a></li>
                        </ul>
                    </nav>
                    <hr/>
                </header>
            </div>
        </div>
    );

}

export default Header;
