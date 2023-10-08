import React, {useEffect, useState} from "react";
import "../styles/AgregarStyle.css"
import PeliculaService from "../services/PeliculaService";

function AgregarPelicula(){

    const [nombre, setNombre] = useState("");
    const [link, setLink] = useState("");
    const [duracion, setDuracion] = useState(0);

    function aniadirPelicula() {
        const pelicula = {
            codigo: 1,
            nombre: nombre,
            duracionMinutos: duracion,
            link: link
        }

        PeliculaService.createPelicula(pelicula).then(response => {
            window.location.href = "/cartelera"
        }).catch(error => {
            console.log(error)
        })
    }

    function cambiarNombre(e) {
        setNombre(e.target.value)
    }

    function cambiarDuracion(e) {
        setDuracion(e.target.value)
    }

    function cambiarLink(e) {
        setLink(e.target.value)
    }

    return(
        <div className="agregar-container">
            <div className="formulario">
                <h2 className="titulo">Información de la Pelicula</h2>
                <div className="campos">
                    <label>Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required onChange={cambiarNombre}/>
                </div>
                <div className="campos">
                    <label>Duración en Minutos:</label>
                    <input type="number" id="duracion" name="duracion" required onChange={cambiarDuracion}/>
                </div>
                <div className="campos">
                    <label>Link del Poster:</label>
                    <input type="text" id="link" name="link" required onChange={cambiarLink}/>
                </div>
            </div>
            <button onClick={aniadirPelicula}>Agregar</button>
        </div>
    );
}

export default AgregarPelicula;