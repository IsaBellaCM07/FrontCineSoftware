import axios from "axios";

const CREAR_URL = "http://localhost:8080/usuario";

class CrearService{

    /* Metodo que usa la libreria axios para hacer una petición post al back
     * la cual va a crear un usaurio */
    createUser(usuarioDto){
        return axios.post(CREAR_URL + "/agregar", usuarioDto)
    }
}

export default new CrearService();