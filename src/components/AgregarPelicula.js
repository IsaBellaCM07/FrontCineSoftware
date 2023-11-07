import React, { useState } from "react";
import "../styles/AgregarStyle.css";
import PeliculaService from "../services/PeliculaService";

function AgregarPelicula({token}) {

    /* Todas las constantes que usan useState para irse modificando durante la ejecución del programa
     * y son utilizadas para crear la pelicula */
    const [nombre, setNombre] = useState("");
    const [link, setLink] = useState("");
    const [duracion, setDuracion] = useState(0);
    const [horarios, setHorarios] = useState(""); // Nuevo estado para los horarios

    /*Metodo que setea el nombre de la pelicula despues
    de darle click en el boton*/
    function cambiarNombre(e) {
        setNombre(e.target.value);
    }

    /*Metodo que setea la duracion de la pelicula despues
    de darle click en el boton*/
    function cambiarDuracion(e) {
        setDuracion(e.target.value);
    }

    /*Metodo que setea el link del poster de la pelicula despues
    de darle click en el boton*/
    function cambiarLink(e) {
        setLink(e.target.value);
    }

    /*Metodo que setea los horarios de la pelicula despues
    de darle click en el boton*/
    function cambiarHorarios(e) {
        setHorarios(e.target.value);
    }

    /* Metodo que usa todos los atributos seteados anteriormente para crear un objeto pelicula
     * y este enviarselo por medio de PeliculaService al back */
    function aniadirPelicula() {
        const pelicula = {
            codigo: (Math.random() * 10),
            nombre: nombre,
            duracionMinutos: duracion,
            link: link,
            listaHorarios: horarios.split(",").map((horario) => horario.trim()), // Convertir horarios a una lista
        };
        PeliculaService.createPelicula(pelicula, token)
            .then((response) => {
                window.location.href = "/cartelera";
            })
            .catch((error) => {
                console.log(error);
            });
    }

    /* Todo el codigo html con el que se contruye la pagina*/
    return (
        <div className="agregar-container">
            <div className="formulario">
                <h2 className="titulo">Información de la Pelicula</h2>
                <div className="campos">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        onChange={cambiarNombre}
                    />
                </div>
                <div className="campos">
                    <label>Duración en Minutos:</label>
                    <input
                        type="number"
                        id="duracion"
                        name="duracion"
                        required
                        onChange={cambiarDuracion}
                    />
                </div>
                <div className="campos">
                    <label>Link del Poster:</label>
                    <input
                        type="text"
                        id="link"
                        name="link"
                        required
                        onChange={cambiarLink}
                    />
                </div>
                <div className="campos">
                    <label>Horarios (separados por comas):</label>
                    <input
                        type="text"
                        id="horarios"
                        name="horarios"
                        required
                        onChange={cambiarHorarios}
                    />
                </div>
            </div>
            <button type="submit" className="btn-agregar" onClick={aniadirPelicula}>Agregar</button>
        </div>
    );
}

export default AgregarPelicula;
