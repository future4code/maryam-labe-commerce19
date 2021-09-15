import React from 'react';
import styled from 'styled-components'
import Sputnik from './components/imgs/sputnik.jpg'
import Vostok1 from './components/imgs/vostok1.jpg'
import Explorer1 from './components/imgs/explorer1.jpg'
import Luna10 from './components/imgs/luna10.jpg'

function App() {

  const Card = styled.div`
   border: 1px solid black;
   width: 400px;
   margin: 12px;
  `

  const produtos = [
    {
      id:1,
      nome:'Satélite Vostok 1',
      preco: 20,
      imagem: {Vostok1}
    },
    {
      id:2,
      nome:'Satélite Explorer 1',
      preco: 20,
      imagem:(Explorer1)
    },
    {
      id:3,
      nome:'Satélite Sputnik',
      preco: 20,
      imagem:(Sputnik)
    },
    {
      id:4,
      nome:'Satélite Luna 10',
      preco: 20,
      imagem:(Luna10)
    }
  ]
  
 const listaDeProdutos = produtos.map((cadaProduto) =>{
   return(
     <Card>
       <p>{cadaProduto.imagem}</p>
       <p>{cadaProduto.nome}</p>
       <p>R${cadaProduto.preco}</p>
       <button>Adicionar ao Carrinho</button>
     </Card>
   )
 })

  return (
    <div>{listaDeProdutos}</div>
  );
}

export default App;
