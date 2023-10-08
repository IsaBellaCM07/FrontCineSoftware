import axios from "axios";

const CREAR_URL = "http://localhost:8080/usuario";

class CrearService{

    createUser(usuarioDto){
        return axios.post(CREAR_URL + "/agregar", usuarioDto)
    }
}

export default new CrearService();