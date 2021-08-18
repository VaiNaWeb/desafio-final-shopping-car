import styled from 'styled-components'


const Container = styled.header `
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1 `
    text-align: center;
`

const Header = () => {
    return (
        <Container>
            <Title>Loja de Carros!</Title>
        </Container>
    )
}

export default Header;