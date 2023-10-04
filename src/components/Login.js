// Login.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces internos
import '../styles/LoginStyle.css';

function Login() {
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form className="login-form">
                <input
                    type="text"
                    className="login-input"
                    placeholder="Usuario"
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Contraseña"
                />
                <button type="submit" className="login-button">
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
