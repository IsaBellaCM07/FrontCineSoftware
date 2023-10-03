import React, {useEffect, useState} from 'react';
import PeliculaService from "../services/PeliculaService";


export const PeliculasAdmin = () => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        listarPeliculas();
    }, [])


    const listarPeliculas = () => {

        PeliculaService.getAllPeliculas().then(response => {
            setPeliculas(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


}

export default PeliculasAdmin;