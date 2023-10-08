// Header.js
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Login from "./Login"
import '../styles/HeaderStyle.css';

function Header({usuario, inicioSesion}) {

    console.log(usuario);

    const [modalLogin, setModalLogin] = useState(false);

    const abrirModal = () => {
        setModalLogin(true);
    }

    const cerrarModal = () => {
        setModalLogin(false);
    }

    return (
        <div className="header">
            <div>
                <header id="usuario">
                    <div className="user-links">
                        {
                            usuario == null ? (
                                <div>
                                    <button onClick={modalLogin ? cerrarModal : abrirModal} className="btn-login">Iniciar Sesión</button>
                                    <a href="/crear-cuenta">Crear cuenta</a>
                                    {modalLogin && <Login inicioSesion={inicioSesion}/>}
                                </div>
                            ) : (
                                <div>
                                    <button className="btn-login">Hola {usuario.nombreUsuario}</button>
                                </div>
                            )
                        }
                    </div>
                </header>
            </div>
            <div>
                <header id="opciones">
                    <Link to="/" className="link"><h1>CINECITO</h1></Link>
                    <nav>
                        <ul>
                            <li className="square-list-item"><a href="/cartelera"> CARTELERA</a></li>
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
