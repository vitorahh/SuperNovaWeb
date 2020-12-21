import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import React from "react";

import ModalFacas from "../../ModalFacas";

import { lstMaquinasController} from '../../../Controllers/Maquinas/MaquinasController';
import { lstTipoFacasController } from "../../../Controllers/TipoFacas/TipoFacasController";
import { deleteFaca } from '../../../Controllers/Facas/FacasController';

import { MaquinaInterface } from "../../../Interfaces/MaquinasInterface";
import { TipoFacaInterface } from "../../../Interfaces/TipoFacasInterfaces";
import Swal from "sweetalert2";

export function buttonTable(idFacas:number){
    return(
        <>
            <button className="btn btn-md btn-outline-info" title="Editar" onClick={()=> render(
                <ModalFacas idFaca={idFacas} viewEdit={true} titleModal="Editar Facas"/> )}>
                <FontAwesomeIcon icon={faEdit} className="mr-1"/> Editar
            </button>
            <button className="btn btn-outline-danger" title="Excluir" onClick={() => {
                Swal.fire({
                    title: 'Deseja deletar esta faca?',
                    confirmButtonText: `Sim`
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        deleteFaca(idFacas)
                        window.location.reload();
                    }
              })
            }}>
                <FontAwesomeIcon icon={faTrashAlt} className="mr-1"/> Excluir
            </button>
        </>
    )
} 

export function OptionsDropMaquinas(){
    var DropMaquinasObject = Object();
    lstMaquinasController()
        .then((response) =>{
            if(response)
                response.map(function(Maquina:MaquinaInterface) {
                    return DropMaquinasObject[Maquina.DS_MAQUINA_FACA] = Maquina.DS_MAQUINA_FACA
                });
    });
    return DropMaquinasObject;
}

export function OptionsDropTipoFacas(){
    var DropTipoFacaObject = Object();
        lstTipoFacasController()
        .then((response) =>{
            if(response)
                response.map(function(TipoFaca:TipoFacaInterface) {
                    return DropTipoFacaObject[TipoFaca.DS_TIPO_FACAS] = TipoFaca.DS_TIPO_FACAS
                });
    });
    return DropTipoFacaObject;
}