import axios from "axios";

const PELICULAS_URL = "http://localhost:8080/catalogoP";

class PeliculaService{

    getAllPeliculas(){
        return axios.get(PELICULAS_URL + "/listar");
    }

    createPelicula(pelicula){
        return axios.post(PELICULAS_URL + "/agregarP", pelicula);
    }

    deletePelicula(peliculaId, pelicula){
        return axios.delete(PELICULAS_URL + "/eliminarP/" + peliculaId, pelicula);
    }
}

export default new PeliculaService();