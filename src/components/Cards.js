import React from 'react'
import CadaCard from './CadaCard';




class Cards extends React.Component{
    render(){
    return(
        < >
            {this.props.card.map(card => (
            <div key={card.id}>
                <CadaCard nome={card.nome} imagem={card.imagem} preco={card.preco}/>
            </div>))}
        </>
    )
 }
}

export default Cards;

