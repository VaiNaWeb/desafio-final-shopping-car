import styled from 'styled-components';
import add from '../assets/add.svg'

const Container = styled.div `
    width: 180px;
    margin: 0 .5rem;
    margin-bottom: .9rem ;
    height: fit-content;
    border: solid 1px #E6E6E6;
    border-radius: 4px;
    opacity: ${props => props.active? 1: 0.5};

    &:hover{
        border-color: ${props => props.active? '#5BC0DE': ''} ;
        cursor: ${props => props.active? 'pointer' : 'no-drop' };
    }

    &:hover .head{
        background-color: ${props => props.active? '#5BC0DE': ''};
        color: ${props => props.active? '#fff': ''};
        cursor: ${props => props.active? 'pointer' : 'no-drop' };
    }
`

const CardHead = styled.div `
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F5F5F5;
    border-bottom: solid 1px #E6E6E6;

    
`

const CardBody = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const CardTexts = styled.p `
    font-size: .9rem;
`

const CardBtn = styled.button `
    border: none;
    background: none;
`

const CardBtnImg = styled.img `
    cursor: pointer;
`

const Card = ({carName,assembler, price,sort, active, click, drag}) => {
    return(
        <Container active={active} draggable onDragStart={drag} >
            <CardHead className='head' active={active} >
                <CardTexts><b>{carName}</b></CardTexts>
                <CardBtn disabled={!active} onClick={click} >
                    <CardBtnImg src={add} alt= "botão de adicionar" />
                </CardBtn>
            </CardHead>
            <CardBody>
                <CardTexts><b>Montadora:</b> {assembler}</CardTexts>
                <CardTexts><b>Preço:</b> R$ {price}.000</CardTexts>
                <CardTexts><b>Tipo:</b> {sort}</CardTexts>
            </CardBody>
        </Container>
    )
}

export default Card;