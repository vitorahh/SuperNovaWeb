import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory from 'react-bootstrap-table2-filter';

import { FacasInterface } from '../../Interfaces/FacasInterface';

import { ColunsUser, options,rowClasses } from './Utils/ConfigTable';

import './styles.css';

export function tableFacas(lstTable:Array<FacasInterface>){

    const { SearchBar } = Search;
    
    return (
        
        <ToolkitProvider
          keyField='ID_FACA'
          data={lstTable}
          columns={ColunsUser}
          search >
          {
              props => (
                  <div>
                      <SearchBar { ...props.searchProps } className="searchTable" placeholder="Pesquisar Faca"/>
                      <hr />
                      <PaginationProvider
                          pagination={ paginationFactory(options) } >
                              {({ paginationProps, paginationTableProps }) => (
                              <div className="card-body table-responsive p-0">
                                  <BootstrapTable  {... props.baseProps}
                                      headerClasses="thead-dark"
                                      rowClasses={rowClasses}
                                      filter={ filterFactory()}
                                      filterPosition="top"
                                      bordered={false}
                                      hover
                                      { ...paginationTableProps }
                                  />
                                  <PaginationListStandalone { ...paginationProps }/>
                              </div>)}
                      </PaginationProvider>
              </div>)
          }
        </ToolkitProvider>
            
    )
} 