export interface FilterFacasInterface {
    ID_FACA?:number,
    ID_MAQUINA_FACA?: number,
    ID_TIPO_FACAS?: number,
    VL_ALTURA_FACA?:number,
    VL_LARGURA_FACA?:number,
    NR_FACA?:number,
    NR_COLUNAS_FACA?:number,
    NR_LINHAS_FACA?:number,
    DS_CAIXA_FACA?:string,
    DS_CLIENTE_FACA?:string,
    DS_OBSERVACAO?:string,
};


export interface ResponseFacasInterFaca {
    valid:Boolean,
    Facas:Array<FacasInterface>
}
export interface ResponseGetFacasInterFaca {
    valid:Boolean,
    Facas:FacasInterface
}

export interface FacasInterface {
     ID_FACA?:number
    ,ID_MAQUINA_FACA?:number
    ,ID_TIPO_FACAS?:number
    ,DS_MAQUINA_FACA?:string
    ,DS_TIPO_FACAS?:string
    ,DS_URL_IMG?:string
    ,VL_ALTURA_FACA?:number 
    ,VL_LARGURA_FACA?:number
    ,NR_FACA?:number
    ,NR_COLUNAS_FACA?:number
    ,NR_LINHAS_FACA?:number
    ,DS_CAIXA_FACA?:string
    ,DS_CLIENTE_FACA?:string
    ,DS_OBSERVACAO?:string
}


export interface FacasCadastroInterface {
    ID_FACA?:number
   ,ID_MAQUINA_FACA:number
   ,ID_TIPO_FACAS:number
   ,DS_URL_IMG?:string
   ,VL_ALTURA_FACA:number 
   ,VL_LARGURA_FACA:number
   ,NR_FACA:number
   ,NR_COLUNAS_FACA:number
   ,NR_LINHAS_FACA:number
   ,DS_CAIXA_FACA:string
   ,DS_CLIENTE_FACA:string
   ,DS_OBSERVACAO:string
}