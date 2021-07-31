import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div `
    width: 16vw;
    border: solid 1px gray;
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
`
const TitleContainer = styled.div `
    background-color: #F5F5F5; 
    width: 100%;
    height: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        margin: .35rem;
    }

    button{
        margin: 0.35rem;
        background: #000;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 50%;
        width: 1.5vw;
        height: 1.5vw;
        cursor: pointer;
    }
   
`

const SecondContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vw;

    p{
        line-height: 0;
        
    }
`

export default function Card ({carro}){
    return(
        <CardContainer>
            <TitleContainer>
                <h4>{carro.nome}</h4>
                <button>+</button>
            </TitleContainer>
            <SecondContainer>
                <p> <b>Montadora:</b> {carro.montadora}</p>
                <p> <b>Preço:</b> {carro.preco}</p>
                <p> <b>Tipo:</b> {carro.tipo}</p>
            </SecondContainer>
        </CardContainer>
    )
}