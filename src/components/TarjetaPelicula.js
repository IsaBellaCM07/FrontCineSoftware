import React from "react";
import '../styles/TarjetaPeliculaStyle.css';
function TarjetaPelicula (prop){

    const peli = prop.movie;

    return(
        <div className="container-tarjeta">
            <article className="tarjeta">
                <img src="https://hips.hearstapps.com/hmg-prod/images/gabz-godfather-1646152137.png" className="poster"/>
                <h2 key={peli.id}>{peli.nombre}</h2>
            </article>
        </div>
    );
}

export default TarjetaPelicula