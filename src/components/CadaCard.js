import React from 'react'
import styled from 'styled-components'


const EnvolvendoCard = styled.div`
 border: 1px solid black;
 margin: 12px;
 width: 200px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-bottom: 10px;
`
class CadaCard extends React.Component{
    render(){
    return(
        <EnvolvendoCard>
             <img src={this.props.imagem} alt="" />
             <h4>{this.props.nome}</h4>
             <p>R${this.props.preco}</p>
             <button>Adicionar ao Carrinho</button>
        </EnvolvendoCard>
    )
    }
}

export default CadaCard;

