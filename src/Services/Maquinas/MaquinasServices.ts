
import Axios from "../api";
import { ResponseMaquinaInterface } from '../../Interfaces/MaquinasInterface';
import { AxiosResponse } from "axios";

export function lstMaquinasServices(){
    return Axios.post<ResponseMaquinaInterface>(`/ApiMaquinas/getListMaquinas`)
    .then(function(response:AxiosResponse<ResponseMaquinaInterface>){
        return response.data;
    }).catch((err)=>{
        throw new Error(err);
    })
};