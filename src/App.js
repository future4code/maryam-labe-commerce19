import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const DivFiltros = styled.div `
  border: 1px black solid;
  margin: 30px;
  padding-left: 10px;
  padding-bottom: 90vh;
  
`
const FormFiltros = styled.form `
  display: flex;
  flex-direction: column;
`

const LabelFiltros = styled.label `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
`

export default class App extends React.Component { 

  render() {
    return <DivFiltros>
      
      <h3>Filtros</h3>
      
      <FormFiltros>
        <LabelFiltros>
        Valor Mínimo:
          <input type="number" name="valor-minimo" />
        </LabelFiltros>
      
        <LabelFiltros>
          Valor Máximo:
          <input type="number" name="valor-maximo" />
        </LabelFiltros>
        
        <LabelFiltros>
          Buscar por Nome:
          <input type="text" name="busca-por-nome" />
        </LabelFiltros>
      </FormFiltros>
    
    
  </DivFiltros>
    }
}


