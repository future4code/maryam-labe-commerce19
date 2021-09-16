import React from 'react';

import Cards from './components/Cards';

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
border: 3px solid green;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 10px;
`
const EstilizandoTopo = styled.div`
border: 2px solid orange;
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

const App = () => {

 

  return (
    <EstilizacaoPagina>
      <EstilizacaoFiltros>
        <p>Filtros</p>
      </EstilizacaoFiltros>
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
            <Cards card={cards}/>
        </ EstilizandoProdutos>
        
      </EstilizandoHome>
      <EstilizandoCarrinho>
        <p>Carrinho</p>
      </EstilizandoCarrinho>
    </EstilizacaoPagina>
  );
}

export default App;
