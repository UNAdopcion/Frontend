import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/registro";

class RegistrarMascotaServicio{
    registrarMascota(datos){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, datos, {headers: {
                'Content-Type': 'multipart/form-data'
            }});
    }
}

export default new RegistrarMascotaServicio();