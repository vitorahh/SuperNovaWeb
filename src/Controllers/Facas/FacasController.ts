import Swal from 'sweetalert2';
import { FilterFacasInterface, FacasInterface, FacasCadastroInterface } from '../../Interfaces/FacasInterface';

import { addFaca, attFaca, delFaca, getfaca, lstFacasServices} from '../../Services/Facas/FacasServices';

export function lstFacasController(filters:FilterFacasInterface, setlstFacas:React.Dispatch<React.SetStateAction<Array<FacasInterface>>>){
    return lstFacasServices(filters)
    .then((response) => {
        if(response.valid){
            setlstFacas(response.Facas);
            return response;
        }
    })
    .catch((err:Error) => {
            console.log(err);
        }
    );
}

export function SelectFaca(idUser:number,setFaca:React.Dispatch<React.SetStateAction<FacasInterface>>){
    return getfaca(idUser)
    .then((response) => {
        if(setFaca)
            setFaca(response.Facas)
        return response.Facas;
    }).catch((err:Error)=>{
        console.log(err.message);
    })
}

export function atualizarFaca(Facas:FacasCadastroInterface){
    return attFaca(Facas)
    .then((response) => {
        if(response.valid){
            Swal.fire({
                title: 'Sucesso!',
                text: 'Edição efetuada com sucesso',
                icon: 'success',
                showConfirmButton:false,
                timer: 2000
              })
            return response;
        }else
        {
            Swal.fire({
                title: 'Error!',
                text: response.msg,
                icon: 'error',
                confirmButtonText: 'Confirma'
              })
            throw new Error(response.msg)
        }
    }).catch((err:Error)=>{
        console.log(err.message);
    })
}

export function adicionarFaca(Facas:FacasCadastroInterface){
    return addFaca(Facas)
    .then((response) => {
        if(response.valid){
            Swal.fire({
                title: 'Sucesso!',
                text: 'Faca cadastrada com sucesso',
                icon: 'success',
                showConfirmButton:false,
                timer: 2000
              })
            return response;
        }else
        {
            Swal.fire({
                title: 'Error!',
                text: response.msg,
                icon: 'error',
                confirmButtonText: 'Confirma'
              })
            throw new Error(response.msg)
        }
           
    }).catch((err:Error)=>{
        console.log(err.message);
    })
}

export function deleteFaca(Id_faca:number){
    return delFaca(Id_faca)
    .then((response) => {
        if(response.valid){
            Swal.fire({
                title: 'Sucesso!',
                text: 'Faca deletada com sucesso',
                icon: 'success',
                showConfirmButton:false,
                timer: 2000
            })
            return response;
        }
        else
        {
            Swal.fire({
                title: 'Error!',
                text: 'Ocorreu um erro, por favor entre em contato com o administrador!',
                icon: 'error',
                confirmButtonText: 'Confirma'
              })
            throw new Error(response.msg)
        }
    }).catch((err:Error)=>{
        console.log(err.message);
    })
}
