import React, {useEffect, useState} from 'react';
import PeliculaService from "../services/PeliculaService";
import TarjetaPelicula from "./TarjetaPelicula";
import '../styles/PeliculasStyle.css';
import {Link} from "react-router-dom";



export const PeliculasAdmin = ({usuario}) => {

    /* Esta es la constante que usa useState para irse modificando durante la ejecución del programa
     * y es utilizada para tener todas las peliculas que hay en la base de datos */
    const [peliculas, setPeliculas] = useState([]);

    /* Este es un metodo de tipo useEffect que sirve para que cada vez que hay un cambio de algun tipo
     * se modifique automaticamente en tiempo de ejecucion y sirve para listar las peliculas */
    useEffect(() => {
        listarPeliculas();
    }, [])

    /* Metodo que principalmente mediante PeliculaService trae todas las peliculas que hay en
     * la base de datos */
    const listarPeliculas = () => {

        PeliculaService.getAllPeliculas().then(responsee => {
            setPeliculas(responsee.data.response);
            console.log(responsee.data.response)
        }).catch(error => {
            console.log(error);
        })
    }

    /* Todo el codigo html que forma la estructura del componente */
    return (
        <div className="tarjetas">
                <Link to="/aniadir-pelicula"><h3 className="aniadir">+</h3></Link>
                {
                    peliculas.map(pelicula =>
                        <TarjetaPelicula movie = {pelicula} usuario={usuario}/>
                    )
                }
        </div>
    );
}

export default PeliculasAdmin;