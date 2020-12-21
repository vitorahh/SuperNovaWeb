import { TipoFacaInterface } from '../../Interfaces/TipoFacasInterfaces';

import { lstTipoFacasServices } from '../../Services/TipoFaca/TipoFacasServices';

export function lstTipoFacasController(setlstTipoFacas?:React.Dispatch<React.SetStateAction<Array<TipoFacaInterface>>>){
    return lstTipoFacasServices()
    .then((response) => {
        if(setlstTipoFacas)
            setlstTipoFacas(response.TipoFacas);
        return response.TipoFacas;
    }).catch((err:Error)=>{
        console.log(err.message);
    })
}
