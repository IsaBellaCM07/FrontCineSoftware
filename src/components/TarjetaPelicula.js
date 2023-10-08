import React, { useState } from "react";
import "../styles/TarjetaPeliculaStyle.css";
import { Link } from "react-router-dom";
import PeliculaService from "../services/PeliculaService";

function TarjetaPelicula(prop) {
    const peli = prop.movie;
    const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
    const [nuevoHorario, setNuevoHorario] = useState("");
    const [horarios, setHorarios] = useState(peli.listaHorarios);

    const seleccionarHorario = (horario) => {
        if (horario === horarioSeleccionado) {
            setHorarioSeleccionado(null);
        } else {
            setHorarioSeleccionado(horario);
        }
    };

    const eliminarPeli = () => {
        PeliculaService.deletePelicula(peli.codigo, peli)
            .then((response) => {
                window.location.href = "/cartelera";
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const agregarHorario = () => {
        if (nuevoHorario.trim() === "") {
            return;
        }

        if (horarioSeleccionado) {
            // Reemplazar el horario seleccionado con el nuevo horario
            const nuevosHorarios = horarios.map((horario) =>
                horario === horarioSeleccionado ? nuevoHorario : horario
            );
            setHorarios(nuevosHorarios);
            setHorarioSeleccionado(null);
        } else {
            setHorarios([...horarios, nuevoHorario]);
        }

        setNuevoHorario("");
    };

    const eliminarHorario = () => {
        if (horarioSeleccionado) {
            // Filtrar la lista de horarios para eliminar el horario seleccionado
            const nuevosHorarios = horarios.filter((horario) => horario !== horarioSeleccionado);
            setHorarios(nuevosHorarios);
            setHorarioSeleccionado(null);
        }
    };

    return (
        <div className="container-tarjeta">
            <article className="tarjeta">
                <Link to="/" className="link-poster">
                    <img src={peli.link} className="poster" alt="Poster de la película" />
                </Link>
                <Link to="/" className="link-titulo">
                    <h2 key={peli.id} className="nombre-peli">
                        {peli.nombre}
                    </h2>
                </Link>
                <h3 className="horarios-title">Horarios:</h3>
                <ul className="horarios-list">
                    {horarios.map((horario) => (
                        <li
                            key={horario}
                            className={`horario-item ${
                                horario === horarioSeleccionado ? "horario-seleccionado" : ""
                            }`}
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
                        <button className="boton-elim" onClick={eliminarHorario}>
                            <img
                                className="img-boton"
                                src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                                alt="Eliminar horario"
                            />
                        </button>
                    </div>
                </ul>
                <button className="boton-eliminar" onClick={eliminarPeli}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                        className="img-boton"
                        alt="Eliminar película"
                    />
                </button>
                <button className="boton-editar">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/32/32355.png"
                        className="img-boton"
                        alt="Editar película"
                    />
                </button>
            </article>
        </div>
    );
}

export default TarjetaPelicula;
