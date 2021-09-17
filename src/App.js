import React from 'react';

import Cards from './components/Cards';

import Carrinho from './components/Carrinho/Carrinho';

import styled from 'styled-components'

import Sputnik from './components/imgs/sputnik.jpg'
import Vostok1 from './components/imgs/vostok1.jpg'
import Explorer1 from './components/imgs/explorer1.jpg'
import Luna10 from './components/imgs/luna10.jpg'

const EstilizacaoPagina = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 1fr;
`

const EstilizacaoFiltros = styled.div`
/* border: 1px solid blue; */
`
const EstilizandoCarrinho = styled.div`
/* border: 1px solid blue; */
`
const EstilizandoHome = styled.section`
width: 100vh;
display:grid;
grid-template-rows: 60px 1fr;
`

const EstilizandoProdutos = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 10px;
`
const EstilizandoTopo = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 10px;
`

const cards = [
  {
      id: 1,
      nome: 'Sputnik',
      preco: 230,
      imagem: Sputnik
  },
  {
      id: 2,
      nome: 'Vostok 1',
      preco: 20,
      imagem:Vostok1
  },
  {
      id: 3,
      nome: 'Explorer 1',
      preco: 35,
      imagem: Explorer1
  },
  {
      id: 4,
      nome: 'Luna 10',
      preco: 100,
      imagem: Luna10
  },
]


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

class App extends React.Component {
  state = {
    filtroValorMinimo: 0,
    filtroValorMaximo: 500,
    filtroBuscaNome: ""  
  }

  onChangeMinimo = (event) => {
    this.setState({filtroValorMinimo: event.target.value})
  }
  onChangeMaximo = (event) => {
    this.setState({filtroValorMaximo: event.target.value})
  }
  onChangeNome = (event) => {
    this.setState({filtroBuscaNome: event.target.value})
  }

  render() {


  return (
    <EstilizacaoPagina>

     {/* {Filtros} */}
      <EstilizacaoFiltros>
        <DivFiltros>
          <h3>Filtros</h3>
          <FormFiltros>

            <LabelFiltros>
              Valor Mínimo:
              <input type="number" name="valor-minimo" 
              value={this.state.filtroValorMinimo} 
              onChange={this.onChangeMinimo} />
            </LabelFiltros>
      
            <LabelFiltros>
              Valor Máximo:
              <input type="number" name="valor-maximo" 
              value={this.state.filtroValorMaximo} 
              onChange={this.onChangeMaximo} />
            </LabelFiltros>
        
            <LabelFiltros>
              Buscar por Nome:
              <input type="text" name="busca-por-nome" 
              value={this.state.filtroBuscaNome} 
              onChange={this.onChangeNome} />
            </LabelFiltros>

          </FormFiltros>
          </DivFiltros>
      </EstilizacaoFiltros>

     {/* {HOME} */}

      <EstilizandoHome>
        <EstilizandoTopo>
          
          <p>Quantidade:{cards.length}</p>
          <label>
            Ordenação:
            <select>
              <option value="CRESCENTE">Crescente</option>
              <option value="DECRESCENTE">Decrescente</option>
            </select>
          </label>
        </EstilizandoTopo>
        <EstilizandoProdutos>
            <Cards card={cards.filter(card => card.preco > this.state.filtroValorMinimo 
              && card.preco < this.state.filtroValorMaximo 
              && card.nome.toLowerCase().includes(this.state.filtroBuscaNome.toLowerCase()))}/>
        </ EstilizandoProdutos> 
      </EstilizandoHome>


      {/* {CARRINHO} */}

      <EstilizandoCarrinho>
        <Carrinho></Carrinho>
      </EstilizandoCarrinho>
    </EstilizacaoPagina>
  );
  };
}

export default App;
