import React, {useEffect, useState} from 'react';
import PeliculaService from "../services/PeliculaService";
import TarjetaPelicula from "./TarjetaPelicula";
import '../styles/PeliculasStyle.css';
import {Link} from "react-router-dom";



export const PeliculasAdmin = () => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        listarPeliculas();
    }, [])

    const listarPeliculas = () => {

        PeliculaService.getAllPeliculas().then(responsee => {
            setPeliculas(responsee.data.response);
            console.log(responsee.data.response)
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="tarjetas">
                <Link to="/aniadir-pelicula"><h3 className="aniadir">+</h3></Link>
                {
                    peliculas.map(pelicula =>
                        <TarjetaPelicula movie = {pelicula}/>
                    )
                }
        </div>
    );
}

export default PeliculasAdmin;