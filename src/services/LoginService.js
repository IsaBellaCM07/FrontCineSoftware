import axios from "axios";

const LOGIN_URL = "http://localhost:8080/autenticacion";

class LoginService{

    /*SesioDto es un array con el userName y la password*/
    login(sesionDTO){
        return axios.post(LOGIN_URL + "/login", sesionDTO);
    }
}

export default new LoginService();