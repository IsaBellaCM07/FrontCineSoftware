// Header.js
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Login from "./Login"
import '../styles/HeaderStyle.css';

function Header({usuario, inicioSesion}) {

    /* Constante que usa useState para modificarse */
    const [modalLogin, setModalLogin] = useState(false);
    const aux = usuario.split(',');
    const nombreUs = () => usuario == "" ? [""] : aux[1].split('"');

    /* Setea la constante anterior para abrir el cuadrito emergente de iniciar sesión */
    const abrirModal = () => {
        setModalLogin(true);
    }

    function reiniciarToken(){
        localStorage.clear();
        window.location.reload();
    }

    /* Setea la constante anterior para cerrar el cuadrito emergente de iniciar sesión */
    const cerrarModal = () => {
        setModalLogin(false);
    }

    /* Todo el codigo html que forma la estructura del componente */
    return (
        <div className="header">
            <div>
                <header id="usuario">
                    <div className="user-links">
                        {
                            usuario == "" ? (

                                <div>
                                    <button onClick={modalLogin ? cerrarModal : abrirModal} className="btn-login">Iniciar Sesión</button>
                                    <a className="btn-login" href="/crear-cuenta">Crear cuenta</a>
                                    {modalLogin && <Login inicioSesion={inicioSesion}/>}
                                </div>
                            ) : (
                                <div>
                                    <button className="btn-login">Hola {nombreUs()[3]}</button>
                                    <Link to="/" className="link"><button className="btn-login" onClick={reiniciarToken}>Cerrar Sesión</button></Link>
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
                            <li className="square-list-item"><a href = "/teatros">TEATROS</a></li>
                            <li className="square-list-item"><a href = "/confiteria">CONFITERÍA</a></li>
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
