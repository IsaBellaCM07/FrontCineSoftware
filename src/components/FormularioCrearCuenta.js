import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import "../styles/FormularioStyle.css"
import CrearService from "../services/CrearService";

function FormularioCrearCuenta(){

    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);
    const [genero, setGenero] = useState(''); // Agrega el estado para el género

    const [nombre, setNombre] = useState("");
    const [contra, setContra] = useState("");

    const toggleMostrarContrasena = () => {
        setMostrarContrasena(!mostrarContrasena);
    };

    const toggleMostrarConfirmarContrasena = () => {
        setMostrarConfirmarContrasena(!mostrarConfirmarContrasena);
    };

    function cambiarNombre(e) {
        setNombre(e.target.value)
    }

    function cambiarContra(e) {
        setContra(e.target.value)
    }

    function crearUsuario() {
        const usuario = {
            codigo: (Math.random() * 1000),
            nombre: nombre,
            nombreUsuario: nombre,
            contrasenia: contra
        }
        CrearService.createUser(usuario).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div className="formulario-container">
            <form autoComplete="off" className="formulario-registro">
                <div className="formulario-seccion1">
                    <h2 className="titulo-seccion">01. Datos personales</h2>
                    <div className="formulario-campo">
                        <label htmlFor="nombres">Nombres:</label>
                        <input type="text" id="nombres" name="nombres" required onChange={cambiarNombre}/>
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

                <div className="formulario-seccion2">
                    <h2 className="titulo-seccion">02. Email de acceso</h2>
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
                                onChange={cambiarContra}
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
                <button type="button" className="formulario-submit" onClick={crearUsuario}>Crear cuenta</button>
            </form>
        </div>
    )
}

export default FormularioCrearCuenta;