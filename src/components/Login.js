// Login.js
import React, {useState} from 'react';
import '../styles/LoginStyle.css';
import LoginService from "../services/LoginService";

function Login({inicioSesion}) {

    const [nombreUs, setNombre] = useState("");
    const [contra, setContra] = useState("");


    function cambiarUsuario(e) {
        setNombre(e.target.value);
    }

    function cambiarContra(e) {
        setContra(e.target.value);
    }

    function iniciarSesion() {
        const sesionDTO = {
            nombreUsuario: nombreUs,
            contrasenia: contra
        }
        LoginService.login(sesionDTO).then(response => {
            inicioSesion(response.data.response);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

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
