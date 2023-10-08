import React from "react";
import '../styles/TarjetaPeliculaStyle.css';
import {Link} from "react-router-dom";
function TarjetaPelicula (prop){

    const peli = prop.movie;
    const horariosCortos = ["01:20", "04:20", "07:20", "10:20"];
    const horariosLargos = ["01:15", "06:15"];

    console.log(peli.duracionMinutos);

    return(
        <div className="container-tarjeta">
            <article className="tarjeta">
                <Link to="/" className="link-poster"><img src={peli.link} className="poster"/></Link>
                <Link to="/" className="link-titulo"><h2 key={peli.id} className="nombre-peli">{peli.nombre}</h2></Link>
                <h3 className="horarios-title">Horarios:</h3>
                <ul className="horarios-list">
                    {
                        peli.duracionMinutos < 140 ? horariosCortos.map(horario =>
                                <Link to="/" className="link-horario"><li className="horario-item">{horario}</li></Link>)
                            : horariosLargos.map(horario =>
                                <Link to="/" className="link-horario"><li className="horario-item">{horario}</li></Link>)
                    }
                </ul>
            </article>
        </div>

    );
}

export default TarjetaPelicula