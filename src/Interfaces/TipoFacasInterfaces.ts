export interface TipoFacaInterface {
    ID_TIPO_FACAS:number
   ,DS_TIPO_FACAS:string
}

export interface ResponseTipoFacasInterface {
    valid:Boolean,
    TipoFacas:Array<TipoFacaInterface>
}