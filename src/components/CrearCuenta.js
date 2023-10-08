import React, { useState } from 'react';
import '../styles/CrearCuentaStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function CrearCuenta() {
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);
    const [genero, setGenero] = useState(''); // Agrega el estado para el género

    const toggleMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };

    const toggleMostrarConfirmarContrasena = () => {
        setMostrarConfirmarContrasena(!mostrarConfirmarContrasena);
    };

    return (
        <div className="letra">
            <div id="BannerRegister" className="ant-row">

                <div id="BannerRegister" className="ant-row">
                    <div className="ant-col ant-col-24">
                        <h1 className="tipo-letra">¿Vas al menos 1 vez al cine por mes?</h1>
                        <div className="tipo-letra">¡Tener membresía te conviene!</div>
                    </div>
                    <div className="ant-col ant-col-24 ContentStep">
                        <div className="Step">
                            2 BOLETAS DE REGALO POR MES
                            <img src="https://cdn-icons-png.flaticon.com/512/1090/1090882.png" className="Icon" alt="Icono"/>
                        </div>
                        <div className="Plus">+</div>
                        <div className="Step">
                            DESCUENTOS EN BOLETERIA
                            <img src="https://cdn-icons-png.flaticon.com/512/792/792030.png" className="Icon" alt="Icono"/>
                        </div>
                        <div className="Plus">+</div>
                        <div className="Step">
                            DESCUENTOS EN CONFITERIA
                            <img src="https://cdn-icons-png.flaticon.com/512/3418/3418886.png" className="Icon" alt="Icono"/>
                        </div>
                    </div>
                </div>



            </div>

            {/* Formulario */}
            <div className="formulario-container">
                <form autoComplete="off" className="formulario-registro">
                    <div className="formulario-seccion">
                        <h2>01. Datos personales</h2>
                        <div className="formulario-campo">
                            <label htmlFor="nombres">Nombres:</label>
                            <input type="text" id="nombres" name="nombres" required />
                        </div>
                        <div className="formulario-campo">
                            <label htmlFor="apellidos">Apellidos:</label>
                            <input type="text" id="apellidos" name="apellidos" required />
                        </div>
                        <div className="formulario-campo">
                            <label htmlFor="ciudad">Ciudad:</label>
                            <input type="text" id="ciudad" name="ciudad" required />
                        </div>
                        <div className="formulario-campo">
                            <label htmlFor="genero" className="campo-label">Género:</label>
                            <div>
                                <select
                                    id="genero"
                                    name="genero"
                                    required
                                    value={genero} // Establece el valor predeterminado
                                    onChange={(e) => setGenero(e.target.value)}
                                >
                                    <option value="">Seleccione género</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="formulario-seccion">
                        <h2>02. Email de acceso</h2>
                        <div className="formulario-campo">
                            <label htmlFor="correo">Correo electrónico:</label>
                            <input type="email" id="correo" name="correo" required />
                        </div>
                        <div className="formulario-campo">
                            <label htmlFor="confirmarCorreo">Confirmar correo electrónico:</label>
                            <input type="email" id="confirmarCorreo" name="confirmarCorreo" required />
                        </div>
                        <div className="formulario-campo">
                            <label htmlFor="contrasena">Contraseña:</label>
                            <div className="campo-password">
                                <input
                                    type={mostrarContrasena ? 'text' : 'password'}
                                    id="contrasena"
                                    name="contrasena"
                                    required
                                />
                                <span className="toggle-password" onClick={toggleMostrarContrasena}>
                                    <FontAwesomeIcon icon={mostrarContrasena ? faEye : faEyeSlash} />
                                </span>
                            </div>
                        </div>
                        <div className="formulario-campo">
                            <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
                            <div className="campo-password">
                                <input
                                    type={mostrarConfirmarContrasena ? 'text' : 'password'}
                                    id="confirmarContrasena"
                                    name="confirmarContrasena"
                                    required
                                />
                                <span className="toggle-password" onClick={toggleMostrarConfirmarContrasena}>
                                    <FontAwesomeIcon icon={mostrarConfirmarContrasena ?  faEye: faEyeSlash} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="formulario-submit">Crear cuenta</button>
                </form>
            </div>
        </div>
    );
}

export default CrearCuenta;
