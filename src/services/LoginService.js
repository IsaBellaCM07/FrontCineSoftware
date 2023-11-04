import axios from "axios";

const LOGIN_URL = "http://localhost:8080/autenticacion";

class LoginService{

    /* SesionDto es un array con el userName y la password*/
    /* Metodo que usa la libreria axios para hacer una petición post al back
    * la cual va retornarme el usuario si los datos de inicar sesión estan bien
    * diligenciados */
    login(sesionDTO){
        return axios.post(LOGIN_URL + "/login", sesionDTO);
    }
}

export default new LoginService();