import React from 'react'
import CadaCard from './CadaCard';




const Cards = (props) =>{
    return(
        < >
            {props.card.map(card => (
            <div key={card.id}>
                <CadaCard nome={card.nome} imagem={card.imagem} preco={card.preco}/>
            </div>))}
        </>
    )
}

export default Cards;

