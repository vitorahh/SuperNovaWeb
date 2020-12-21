
import { buttonTable, OptionsDropMaquinas,OptionsDropTipoFacas } from './ConfigFunctions'
import { numberFilter, Comparator,selectFilter } from 'react-bootstrap-table2-filter';


const selectOptionsMaquinas = OptionsDropMaquinas();
const selectOptionsTipoFacas = OptionsDropTipoFacas();

export const ColunsUser = [
    {
      dataField: 'DS_MAQUINA_FACA',
      text: 'Maquina',
      headerAlign: 'center',
      filter: selectFilter({
        placeholder: 'Todos',
        options: selectOptionsMaquinas,
        comparator: Comparator.EQ, // default is Comparator.EQ
        style: {
          width: '100%'
        }
      })
    }, {
      dataField: 'DS_TIPO_FACAS',
      text: 'Tipo',
      headerAlign: 'center',
      filter: selectFilter({
        placeholder: 'Todos',
        options: selectOptionsTipoFacas,
        comparator: Comparator.EQ, // default is Comparator.EQ
        style: {
          width: '100%'
        }
      })
    },{
      dataField: 'VL_LARGURA_FACA',
      text: 'Largura mm',
      headerAlign: 'center',
      classes:'VlClassNumber',
      filter: numberFilter({
        className: 'tdFilterNumber',
        placeholder: 'Valor',
        comparators: [Comparator.EQ],
        defaultValue: { comparator: Comparator.EQ },
        numberStyle: { color: 'cadetblue', margin: '0px' },
        comparatorStyle: { display: 'none' }
      })
    },{
      dataField: 'VL_ALTURA_FACA',
      text: 'Altura mm',
      headerAlign: 'center',
      classes:'VlClassNumber',
      filter: numberFilter({
        className: 'tdFilterNumber',
        placeholder: 'Valor',
        comparators: [Comparator.EQ],
        defaultValue: { comparator: Comparator.EQ },
        numberStyle: { color: 'cadetblue', margin: '0px' },
        comparatorStyle: { display: 'none' }
      })
    },{
      dataField: 'NR_FACA',
      text: 'Nº Faca',
      headerAlign: 'center',
      classes:'VlClassNumber',
      filter: numberFilter({
        className: 'tdFilterNumber',
        placeholder: 'Valor',
        comparators: [Comparator.EQ],
        defaultValue: { comparator: Comparator.EQ },
        numberStyle: { color: 'cadetblue', margin: '0px' },
        comparatorStyle: { display: 'none' }
      })
    },{
      dataField: 'DS_CAIXA_FACA',
      text: 'Caixa',
      headerAlign: 'center',
      classes:'VlClassNumber',
      filter: numberFilter({
        className: 'tdFilterNumber',
        placeholder: 'Valor',
        comparators: [Comparator.EQ],
        defaultValue: { comparator: Comparator.EQ },
        numberStyle: { color: 'cadetblue', margin: '0px' },
        comparatorStyle: { display: 'none' }
      })
    },{
      dataField: 'NR_COLUNAS_FACA',
      text: 'Colunas',
      headerAlign: 'center',
      classes:'VlClassNumber',
      filter: numberFilter({
        className: 'tdFilterNumber',
        placeholder: 'Valor',
        comparators: [Comparator.EQ],
        defaultValue: { comparator: Comparator.EQ },
        numberStyle: { color: 'cadetblue', margin: '0px' },
        comparatorStyle: { display: 'none' }
      })
    },{
      dataField: 'NR_LINHAS_FACA',
      text: 'Linhas',
      headerAlign: 'center',
      classes:'VlClassNumber',
      filter: numberFilter({
        className: 'tdFilterNumber',
        placeholder: 'Valor',
        comparators: [Comparator.EQ],
        defaultValue: { comparator: Comparator.EQ },
        numberStyle: { color: 'cadetblue', margin: '0px' },
        comparatorStyle: { display: 'none' }
      })
    },{
      dataField: 'ID_FACA',
      text: '',
      classes:'ButtonClassTable',
      formatter: buttonTable,
      formatExtraData:{
          idFacas:'ID_FACA'
      }
    }];

export const options = {
  paginationSize: 5,
  pageStartIndex: 1,
  firstPageText: 'Primeira',
  prePageText: 'Voltar',
  nextPageText: 'Proximo',
  lastPageText: 'Última',
  disablePageTitle: true,
  custom: true
  
};

export const rowClasses = 'RowTable';