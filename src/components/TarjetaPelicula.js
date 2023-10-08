import React, { useState } from "react";
import '../styles/TarjetaPeliculaStyle.css';
import { Link } from "react-router-dom";
import PeliculaService from "../services/PeliculaService";

function TarjetaPelicula(prop) {
    const peli = prop.movie;
    const usuario = prop.usuario;
    const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
    const [nuevoHorario, setNuevoHorario] = useState(""); // Nuevo estado para el nuevo horario
    const [horariosCortos, setHorariosCortos] = useState(["01:20", "04:20", "07:20", "10:20"]); // Estado para los horarios cortos
    const [horariosLargos, setHorariosLargos] = useState(["01:15", "06:15"]); // Estado para los horarios largos

    const seleccionarHorario = (horario) => {
        if (horario === horarioSeleccionado) {
            // Si el horario seleccionado ya está seleccionado, deselecciónalo
            setHorarioSeleccionado(null);
        } else {
            // De lo contrario, selecciona el nuevo horario
            setHorarioSeleccionado(horario);
        }
    };

    const eliminarPeli = () => {
        if(usuario){
            PeliculaService.deletePelicula(peli.codigo, peli).then(response => {
                window.location.href = "/cartelera"
            }).catch(error => {
                console.log(error)
            })
        }else{
            alert("Desbes iniciar sesión");
        }
    };

    const agregarHorario = () => {
        if(usuario){
            if (nuevoHorario.trim() === "") {
                return; // Evita agregar horarios vacíos
            }

            // Determina a cuál array agregar el nuevo horario en función de la duración de la película
            const horarios = peli.duracionMinutos < 140 ? [...horariosCortos] : [...horariosLargos];

            // Agrega el nuevo horario al array
            horarios.push(nuevoHorario);

            // Actualiza el estado correspondiente con el nuevo array de horarios
            if (peli.duracionMinutos < 140) {
                setHorariosCortos(horarios);
            } else {
                setHorariosLargos(horarios);
            }

            // Limpia el campo de entrada del nuevo horario
            setNuevoHorario("");
        }else{
            alert("Desbes iniciar sesión");
        }
    };

    return (
        <div className="container-tarjeta">
            <article className="tarjeta">
                <Link to="/" className="link-poster"><img src={peli.link} className="poster" /></Link>
                <Link to="/" className="link-titulo"><h2 key={peli.id} className="nombre-peli">{peli.nombre}</h2></Link>
                <h3 className="horarios-title">Horarios:</h3>
                <ul className="horarios-list">
                    {peli.duracionMinutos < 140
                        ? horariosCortos.map((horario) => (
                            <li
                                key={horario}
                                // Se aplica clases CSS al elemento <li> basadas en si el horario está seleccionado o no
                                className={`horario-item ${horario === horarioSeleccionado ? "horario-seleccionado" : ""}`}
                                onClick={() => seleccionarHorario(horario)}
                            >
                                {horario}
                            </li>
                        ))
                        : horariosLargos.map((horario) => (
                            <li
                                key={horario}
                                // Se aplica clases CSS al elemento <li> basadas en si el horario está seleccionado o no
                                className={`horario-item ${horario === horarioSeleccionado ? "horario-seleccionado" : ""}`}
                                onClick={() => seleccionarHorario(horario)}
                            >
                                {horario}
                            </li>
                        ))}

                    <div className="horario-input">
                        <input
                            type="text"
                            placeholder="Nuevo horario"
                            value={nuevoHorario}
                            onChange={(e) => setNuevoHorario(e.target.value)}
                        />
                        <button className="boton-agregar" onClick={agregarHorario}>
                            <img
                                className="img-boton"
                                src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
                                alt="Agregar horario"
                            />
                        </button>
                    </div>
                </ul>

                <button className="boton-eliminar" onClick={eliminarPeli}><img src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png" className="img-boton" /></button>
                <button className="boton-editar"><img src="https://cdn-icons-png.flaticon.com/512/32/32355.png" className="img-boton" /></button>
            </article>
        </div>
    );
}

export default TarjetaPelicula;
