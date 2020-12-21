
import Axios from "../api";
import { ResponseTipoFacasInterface } from '../../Interfaces/TipoFacasInterfaces';
import { AxiosResponse } from "axios";

export function lstTipoFacasServices(){
    return Axios.post<ResponseTipoFacasInterface>(`/ApiTipoFacas/getListTipoFacas`)
    .then(function(response:AxiosResponse<ResponseTipoFacasInterface>){
        return response.data;
    }).catch((err)=>{
        throw new Error(err);
    })
};