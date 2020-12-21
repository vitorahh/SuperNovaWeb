import React,{useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';

import ModalUsuario from '../../Components/ModalFacas';
import { tableFacas } from '../../Components/TableFacas';

import { lstFacasController } from '../../Controllers/Facas/FacasController';
import {  FacasInterface, FilterFacasInterface } from '../../Interfaces/FacasInterface';

function Home(){
    const [lstFacas, setlstFacas] = useState<Array<FacasInterface>>([]);
    const parms:FilterFacasInterface = {}
    useEffect(() => {
        lstFacasController(parms,setlstFacas);
      },[tableFacas]);

    return (
        <div>
            <div className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h3 className="m-0 text-dark"> Controle de Facas</h3>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                <button className="btn btn-sm btn-outline-success font-weight-bold" 
                                onClick={()=> {
                                    render(
                                            <ModalUsuario viewEdit={false} titleModal="Cadastrar Faca"/>
                                                )} }>
                                            <FontAwesomeIcon icon={faUserPlus} className="mr-3"/>Cadastrar
                                    </button>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {tableFacas(lstFacas)}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Home;