// Login.js
import React, {useState} from 'react';
import '../styles/LoginStyle.css';
import LoginService from "../services/LoginService";

function Login({inicioSesion}) {

    /* Todas las constantes que usan useState para irse modificando durante la ejecución del programa
     * y son utilizadas para el inicio de sesión */
    const [nombreUs, setNombre] = useState("");
    const [contra, setContra] = useState("");

    /*Metodo que setea el nombre del usuario despues
   de darle click en el boton */
    function cambiarUsuario(e) {
        setNombre(e.target.value);
    }

    /*Metodo que setea la contraseña del usuario despues
   de darle click en el boton */
    function cambiarContra(e) {
        setContra(e.target.value);
    }

    /* Metodo que usa todos los atributos seteados anteriormente para crear un objeto se sesión
     * y este enviarselo por medio de CrearService al back para iniciar sesión con este ususario */
    function iniciarSesion() {
        const sesionDTO = {
            usuario: nombreUs,
            contrasenia: contra
        }
        LoginService.login(sesionDTO).then(response => {
            inicioSesion(response.data.response.token);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    /* Todo el codigo html que forma la estructura del componente */
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form className="login-form">
                <input
                    type="text"
                    className="login-input"
                    placeholder="Usuario"
                    onChange={cambiarUsuario}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Contraseña"
                    onChange={cambiarContra}
                />
                <button type="button" className="login-button" onClick={iniciarSesion}>
                    Ingresar
                </button>
            </form>
            <div className="forgot-password">
                <a href="/iniciar-sesion">Olvidé mi contraseña</a>
            </div>
        </div>
    );
}

export default Login;
