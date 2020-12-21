export interface MaquinaInterface {
    ID_MAQUINA_FACA:number
   ,DS_MAQUINA_FACA:string
}

export interface ResponseMaquinaInterface {
    valid:Boolean,
    Maquinas:Array<MaquinaInterface>
}