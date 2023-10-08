import React, {useState} from "react";
import "../styles/AgregarStyle.css"

function AgregarPelicula(){

    const [link, setLink] = useState("hola");

    return(
        <div>
            <h2 className="titulo">Información de la Pelicula</h2>
            <div className="campos">
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>
            </div>
            <div className="campos">
                <label>Duración en Minutos:</label>
                <input type="number" id="duracion" name="duracion" required/>
            </div>
            <div className="campos">
                <label>Link del Poster:</label>
                <input type="text" id="link" name="link" required/>
            </div>
        </div>
    );
}

export default AgregarPelicula;