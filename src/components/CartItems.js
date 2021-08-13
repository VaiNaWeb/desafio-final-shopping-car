import styled from 'styled-components';
import del from '../assets/remove.svg';

const Container = styled.div `
    width: 90%;
    border: solid 1px #5BC0DE;
    border-radius: 4px;
    margin: .5rem 0;
`

const CardHead = styled.div `
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5BC0DE;
    color: #fff;
    
`

const CardBody = styled.div `
    display: flex;
    justify-content: space-evenly;

`

const CardTexts = styled.p `
    font-size: .9rem;
`

const CardBtn = styled.img `
    cursor: pointer;
`

const CardItems = ({carName, price,sort, click}) => {
    return(
        <Container >
            <CardHead>
                <CardTexts>{carName}</CardTexts>
                <CardBtn src= {del} alt= 'botão de deletar'  onClick={click} />
            </CardHead>
            <CardBody>
                <CardTexts><b>Tipo:</b> {sort}</CardTexts>
                <CardTexts><b>Preço:</b> R$ {price}.000 </CardTexts>
            </CardBody>
        </Container>
    )
}

export default CardItems;