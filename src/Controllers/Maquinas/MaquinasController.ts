import { MaquinaInterface } from '../../Interfaces/MaquinasInterface';

import { lstMaquinasServices } from '../../Services/Maquinas/MaquinasServices';

export function lstMaquinasController(setlstMaquinas?:React.Dispatch<React.SetStateAction<Array<MaquinaInterface>>>){
    return lstMaquinasServices()
    .then((response) => {
        if(setlstMaquinas)
            setlstMaquinas(response.Maquinas);
        return response.Maquinas;
    }).catch((err:Error)=>{
        console.log(err.message);
    })
}
