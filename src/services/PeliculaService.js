import axios from "axios";

const PELICULAS_URL = "http://localhost:8080/catalogoP";

class PeliculaService{

    /* Metodo que usa la libreria axios para hacer una petición get al back
    * la cual va a retornar todas las peliculas que hay en la base de datos */
    getAllPeliculas(){
        return axios.get(PELICULAS_URL + "/listar");
    }

    /* Metodo que usa la libreria axios para hacer una petición post al back
    * la cual va a crear una pelicula */
    createPelicula(pelicula){
        return axios.post(PELICULAS_URL + "/agregarP", pelicula);
    }

    /* Metodo que usa la libreria axios para hacer una petición delete al back
    * la cual va a eliminar una pelicula especificada por parametro de la
    * base de datos */
    deletePelicula(peliculaId, pelicula){
        return axios.delete(PELICULAS_URL + "/eliminarP/" + peliculaId, pelicula);
    }
}

export default new PeliculaService();