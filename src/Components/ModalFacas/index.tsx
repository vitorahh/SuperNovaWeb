import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSave, faRulerHorizontal, faRulerVertical } from '@fortawesome/free-solid-svg-icons';

import { FacasCadastroInterface, FacasInterface } from '../../Interfaces/FacasInterface';

import { ModalUserInterface } from '../../Interfaces/ModalInterface';

import { lstTipoFacasController } from '../../Controllers/TipoFacas/TipoFacasController';
import { TipoFacaInterface } from '../../Interfaces/TipoFacasInterfaces';

import { MaquinaInterface } from '../../Interfaces/MaquinasInterface';
import { lstMaquinasController } from '../../Controllers/Maquinas/MaquinasController';

import { adicionarFaca, atualizarFaca, SelectFaca } from '../../Controllers/Facas/FacasController';

export default function ModalUsuario(ModalFaca:ModalUserInterface) {
    

    const [show, setShow] = useState(true);

    const { register, handleSubmit } = useForm();

    const [faca, setFaca] = useState<FacasInterface>({});

    const [TipoFaca, setTipoFaca] = useState<Array<TipoFacaInterface>>([])
    const [Maquina, setMaquina] = useState<Array<MaquinaInterface>>([])


    useEffect(() => {
        lstTipoFacasController(setTipoFaca);
        lstMaquinasController(setMaquina); 
        if(ModalFaca.viewEdit){
            SelectFaca(ModalFaca.idFaca!, setFaca)
        }
    },[ModalFaca.idFaca, ModalFaca.viewEdit]);

    const handleClose = () => {
        setShow(false);
    };

    const onSubmit = (data: {
             DS_CAIXA_FACA:string
            ,ID_MAQUINA_FACA:number
            ,ID_TIPO_FACAS:number
            ,NR_FACA:number
            ,VL_ALTURA_FACA:number
            ,VL_LARGURA_FACA:number
            ,NR_COLUNAS_FACA:number
            ,NR_LINHAS_FACA:number
            ,DS_CLIENTE_FACA:string
            ,DS_OBSERVACAO:string
            }) => {
            const FacaModel:FacasCadastroInterface = {
                 ID_FACA: (faca.ID_FACA ?faca.ID_FACA : 0)
                ,ID_MAQUINA_FACA: data.ID_MAQUINA_FACA
                ,ID_TIPO_FACAS:  data.ID_TIPO_FACAS
                ,VL_ALTURA_FACA:  data.VL_ALTURA_FACA 
                ,VL_LARGURA_FACA:  data.VL_LARGURA_FACA
                ,NR_FACA:  data.NR_FACA
                ,NR_COLUNAS_FACA:  data.NR_COLUNAS_FACA
                ,NR_LINHAS_FACA:  data.NR_LINHAS_FACA
                ,DS_CAIXA_FACA:  data.DS_CAIXA_FACA
                ,DS_CLIENTE_FACA:  data.DS_CLIENTE_FACA
                ,DS_OBSERVACAO:  data.DS_OBSERVACAO
              }
              if(ModalFaca.viewEdit){
                atualizarFaca(FacaModel)
                .then((response)=>{
                    if(response.valid){
                        handleClose();
                    }
                })
                .finally(()=>{
                    window.location.reload();
                }); 
              }else{
                adicionarFaca(FacaModel)
                .then((response)=>{
                    if(response.valid){
                        handleClose();
                    }
                })
                .finally(()=>{
                    window.location.reload();
                });
               
                
              }
      } 
      
    return (
    <Modal show={show} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton >
            <Modal.Title>{ModalFaca.titleModal}</Modal.Title>
        </Modal.Header>
        <form id="formEditFaca" onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Caixa</label>
                                <input type="text" 
                                className="form-control"
                                 placeholder="Digite..."
                                 name="DS_CAIXA_FACA"
                                 defaultValue={faca.DS_CAIXA_FACA}
                                 ref={register({ required: true })} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Nº Faca</label>
                                <input type="number"
                                    className="form-control" 
                                    placeholder="Digite..." 
                                    name="NR_FACA"
                                    key="NR_FACA"
                                    ref={register({ required: true })}
                                    defaultValue={faca.NR_FACA} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Maquina</label>
                                <select className="form-control" 
                                    name="ID_MAQUINA_FACA"
                                    ref={register({ required: true })}>
                                    {
                                        Maquina.map(function(Maquina:MaquinaInterface) {
                                            return (
                                                <option key={Maquina.ID_MAQUINA_FACA}
                                                    selected={Maquina.ID_MAQUINA_FACA === faca.ID_MAQUINA_FACA ? true : false} 
                                                    value={Maquina.ID_MAQUINA_FACA}> {Maquina.DS_MAQUINA_FACA}
                                                </option>
                                        )})
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Tipo Faca</label>
                                <select 
                                    className="form-control" 
                                    name="ID_TIPO_FACAS" 
                                    ref={register({ required: true })}>
                                    {
                                        TipoFaca.map(function(TipoFaca:TipoFacaInterface) {
                                            return (
                                            <option key={TipoFaca.ID_TIPO_FACAS} 
                                                selected={TipoFaca.ID_TIPO_FACAS === faca.ID_TIPO_FACAS ? true : false} 
                                                value={TipoFaca.ID_TIPO_FACAS}> {TipoFaca.DS_TIPO_FACAS}
                                            </option>
                                        )})
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Largura</label>
                                    <div className="input-group">
                                        <input type="number" 
                                            className="form-control" 
                                            placeholder="Dígite ..." 
                                            name="VL_LARGURA_FACA"
                                            defaultValue={faca.VL_LARGURA_FACA}
                                            ref={register({ required: true })}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">mm</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Altura</label>
                                <div className="input-group mb-3">
                                    <input type="number" 
                                    className="form-control" 
                                    placeholder="Dígite ..."
                                    name="VL_ALTURA_FACA"
                                    defaultValue={faca.VL_ALTURA_FACA}
                                    ref={register({ required: true })} />
                                    <div className="input-group-append">
                                        <span className="input-group-text">mm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Colunas</label>
                                    <div className="input-group mb-3">
                                            <input type="number" 
                                            className="form-control" 
                                            placeholder="Dígite ..." 
                                            name="NR_COLUNAS_FACA"
                                            defaultValue={faca.NR_COLUNAS_FACA}
                                            ref={register({ required: true })}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faRulerVertical}/>
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label>Linhas</label>
                                <div className="input-group mb-3">
                                    <input type="number" 
                                    className="form-control" 
                                    placeholder="Dígite ..." 
                                    name="NR_LINHAS_FACA"
                                    defaultValue={faca.NR_LINHAS_FACA}
                                    ref={register({ required: true })}/>
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faRulerHorizontal}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Cliente</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Cliente" 
                                defaultValue={faca.DS_CLIENTE_FACA}
                                name="DS_CLIENTE_FACA"
                                ref={register()}/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Observação</label>
                                <textarea className="form-control" 
                                placeholder="Dígite..."
                                name="DS_OBSERVACAO"
                                defaultValue={faca.DS_OBSERVACAO}
                                ref={register()}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-success font-weight-bold mr-2" type="submit">
                    <FontAwesomeIcon icon={faSave} className="mr-3"/>Salvar
                </button>
            </Modal.Footer>
        </form>
    </Modal>
)};