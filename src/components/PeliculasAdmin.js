import React, {useEffect, useState} from 'react';
import PeliculaService from "../services/PeliculaService";
import TarjetaPelicula from "./TarjetaPelicula";
import '../styles/PeliculasStyle.css';
import {Link} from "react-router-dom";
import ListasDependientes from "./ListasDependientes";



export const PeliculasAdmin = ({usuario}) => {

    /* Esta es la constante que usa useState para irse modificando durante la ejecución del programa
     * y es utilizada para tener todas las peliculas que hay en la base de datos */
    const [peliculas, setPeliculas] = useState([]);

    const aux = usuario.split(',');
    const rolUs = () => usuario == "" ? [""] : aux[2].split('"')[3];

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
        }).catch(error => {
            console.log(error);
        })
    }

    /* Todo el codigo html que forma la estructura del componente */
    return (


        <div className="tarjetas">

            <ListasDependientes/>

            {   rolUs() == "administrador" &&
                (<Link to="/aniadir-pelicula"><h3 className="aniadir">+</h3></Link>)
            }

            {
                localStorage.getItem("ciudad") ? peliculas.sort(() => Math.random() - 0.5)
                        .slice(0, Math.floor(Math.random() * peliculas.length) + 1)
                        .map(pelicula =>
                            <TarjetaPelicula movie = {pelicula} usuario={rolUs()}/>)
                    : peliculas.map(pelicula =>
                        <TarjetaPelicula movie = {pelicula} usuario={rolUs()}/>
                    )
            }
        </div>
    );
}

export default PeliculasAdmin;