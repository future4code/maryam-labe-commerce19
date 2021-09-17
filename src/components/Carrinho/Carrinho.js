import React from "react";
import styled from "styled-components";

const PostCarrinho = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const TextCarrinho = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const ProdutoCarrinho = styled.div`
  display: grid;
  gap: 8px;
`;

const Produto = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    webkit-box-align: center;
    align-items: center;
`

class Carrinho extends React.Component {
  render() {
    return (
      <PostCarrinho>
        <TextCarrinho>Carrinho:</TextCarrinho>
        <ProdutoCarrinho>
          <Produto>
            <p> "1" "x"</p>
            <p>Produto 4</p>
            <button>Remover</button>
          </Produto>
        
          <Produto>
            <p> "1" "x"</p>
            <p>Produto 4</p>
            <button>Remover</button>
          </Produto>
          </ProdutoCarrinho>
          <p> "Valor total: R$" "260" ",00" </p>
        
      </PostCarrinho>
    );
  }
}

export default Carrinho;
