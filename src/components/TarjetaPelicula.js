import React from "react";
import '../styles/TarjetaPeliculaStyle.css';
function TarjetaPelicula (prop){

    const peli = prop.movie;
    const horariosCortos = ["01:20", "04:20", "07:20", "10:20"];
    const horariosLargos = ["01:15", "06:15"];

    return(
        <div className="container-tarjeta">
            <article className="tarjeta">
                <img src="https://hips.hearstapps.com/hmg-prod/images/gabz-godfather-1646152137.png" className="poster"/>
                <h2 key={peli.id} className="nombre-peli">{peli.nombre}</h2>
                <h3 className="horarios-title">Horarios:</h3>
                <ul className="horarios-list">
                    {
                        peli.duracion < 140 ? horariosCortos.map(horario =>
                                <li className="horario-item">{horario}</li>)
                            : horariosLargos.map(horario =>
                                <li className="horario-item">{horario}</li>)
                    }
                </ul>
            </article>
        </div>

    );
}

export default TarjetaPelicula