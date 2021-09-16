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
const CadaCard = (props) =>{
    return(
        <EnvolvendoCard>
             <img src={props.imagem} alt="" />
             <h4>{props.nome}</h4>
             <p>R${props.preco}</p>
             <button>Adicionar ao Carrinho</button>
        </EnvolvendoCard>
    )
}

export default CadaCard;

