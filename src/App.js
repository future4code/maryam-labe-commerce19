import React from 'react';

import Cards from './components/Cards';

import styled, { createGlobalStyle } from 'styled-components'

import Sputnik from './components/imgs/sputnik.jpg'
import Vostok1 from './components/imgs/vostok1.jpg'
import Explorer1 from './components/imgs/explorer1.jpg'
import Luna10 from './components/imgs/luna10.jpg'

const GlobalStyle = createGlobalStyle`
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }
`

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

// HOME ESTILIZAÇÃO
const EstilizandoHome = styled.section`
/* border: 1px solid black; */
/* width: 100vh; */
display:grid;
grid-template-rows: 60px 1fr;
`

const EstilizandoProdutos = styled.div`
justify-items: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 10px;
`
const EstilizandoTopo = styled.div`
width: 100%;
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 10px;
margin-top: 30px;
`
//HOME ESTILIZAÇÃO
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

 render() {

  return (
    <EstilizacaoPagina>
      <GlobalStyle/>


     {/* {Filtros} */}
      <EstilizacaoFiltros>
        <DivFiltros>
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
            <Cards card={cards}/>
        </ EstilizandoProdutos> 
      </EstilizandoHome>


      {/* {CARRINHO} */}

      <EstilizandoCarrinho>
        <p>Carrinho</p>
      </EstilizandoCarrinho>



    </EstilizacaoPagina>
  );
  };
}

export default App;
