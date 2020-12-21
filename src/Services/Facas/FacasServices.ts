import Axios from "../api";
import {ResponseFacasInterFaca, FilterFacasInterface, ResponseGetFacasInterFaca, FacasCadastroInterface} from '../../Interfaces/FacasInterface';
import { AxiosResponse } from "axios";

export function lstFacasServices(Filter:FilterFacasInterface){
    return Axios.post<ResponseFacasInterFaca>(`/ApiFacas/getListFacas`, Filter)
    .then(function(response){
        return response.data;
    }).catch((err)=>{
        throw new Error(err);
    })
};


export function getfaca(ID_FACA:number){
    return Axios.get<ResponseGetFacasInterFaca>(`/ApiFacas/getFaca?ID_FACA=${ID_FACA}`)
    .then(function(response:AxiosResponse<ResponseGetFacasInterFaca>){
        return response.data;
    })
    .catch((err)=>{
        throw new Error(err);
    })
};


export function attFaca(Faca:FacasCadastroInterface){
    return Axios.patch(`/ApiFacas/attFaca`, Faca)
    .then(function(response){
        return response.data;
    })
    .catch((err)=>{
        throw new Error(err);
    })
};

export function addFaca(Faca:FacasCadastroInterface){
    return Axios.put(`/ApiFacas/cadFaca`, Faca)
    .then(function(response){
        return response.data;
    })
    .catch((err)=>{
        throw new Error(err);
    })
};

export function delFaca(ID_FACA:number){
    return Axios.delete(`/ApiFacas/delFaca?ID_FACA=${ID_FACA}`)
    .then(function(response){
        return response.data;
    })
    .catch((err)=>{
        throw new Error(err);
    })
};
