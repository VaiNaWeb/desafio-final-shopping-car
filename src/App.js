import { createGlobalStyle } from "styled-components";
import React, { Component } from 'react'
import styled from 'styled-components'
import CarModel from './assets/car.svg'
import Add from './assets/add.svg'
import Remove from './assets/remove.svg'

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
const Container = styled.main`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items: center;
`
const BoxList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  padding: 4vw;
  width:60vw;
  height:90vh;
`
const Box = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  margin-top:3vh;
  overflow-y:scroll;
  justify-content:;
  height:85vh;
  width:35vw;
  border: 1px solid;
  background-image: url(${CarModel});
  background-repeat: no-repeat;
  
 
`
const Card = styled.section`

border: ${(props) =>
    props.BoxList ? 'solid' :
      props.Box ? 'none' :
        props.theme.primary
  };
`
const BoxItems = styled.div`

display: flex;
border: 0.6px solid;
width:15vw;
trasition:1s;
&:hover{
  cursor:pointer;
}
`
const Items = styled.p`
 font-size:1.3vw;
 display:flex;
 border-bottom: 1px solid;
 justify-content: space-evenly;
`
const PriceCard = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-left: 64vw;
`
const Title = styled.h1`
text-align: center;
`
const SubTitle = styled.h4`
opacity:0.8;
`
const Img = styled.img`
border:none;
width:30px;
cursor:pointer
`
const Price = styled.p`
  display:flex;
  justify-content:space-between;
  
  width:33vw;
`
const StyledButton = styled.button`
  border:none;

`

export default class CarShopping extends Component {

  state = {
    car: [
      {
        Nome: "Jetta",
        Montadora: "Volkswagen",
        Preço: 144,
        Tipo: "Sedan",
        id: 1
      },
      {
        Nome: "Pollo",
        Montadora: "Volkswagen",
        Preço: 70,
        Tipo: "Hatch",
        id: 2
      },
      {
        Nome: "T-cross",
        Montadora: "Volkswagen",
        Preço: 123,
        Tipo: "SUV",
        id: 3
      },
      {
        Nome: "Tiguan R-line",
        Montadora: "Volkswagen",
        Preço: 146,
        Tipo: "SUV",
        id: 4
      },
      {
        Nome: "Civic",
        Montadora: "Honda",
        Preço: 115,
        Tipo: "Sedan",
        id: 5
      },
      {
        Nome: "Corolla",
        Montadora: "Toyota",
        Preço: 110,
        Tipo: "SUV",
        id: 6
      },
      {
        Nome: "Corolla Cross",
        Montadora: "Toyota",
        Preço: 184,
        Tipo: "SUV",
        id: 7
      },
      {
        Nome: "Compass",
        Montadora: "Jeep",
        Preço: 132,
        Tipo: "SUV",
        id: 8
      },
      {
        Nome: "Golf G Ti",
        Montadora: "Volkswagen",
        Preço: 136,
        Tipo: "Hatch",
        id: 9
      },

    ],
    listCar: [],
    totalPrice: [],

  }

  handleAdd = (id) => {

    const { car } = this.state;
    const ListCar = this.state.listCar;
    this.setState({
      listCar: this.state.listCar.concat(car.find((item) => item.id === id)),
      totalPrice: this.state.totalPrice.concat(ListCar)
    });
  }

  handleRemove = (id) => {

    if (this.state.listCar !== []) {
      this.setState({
        listCar: this.state.listCar.filter((item) => {
          return (item.id !== id)
        }),
        totalPrice: this.state.totalPrice.filter((item) => {
          return (item.id !== id)
        })
      })
    }
  }

  handleRemoveAll = () => {
    if (this.state.listCar && this.state.totalPrice !== []) {
      this.setState({
        listCar: [],
        totalPrice: []
      })
    }
  }

  handleChange = () => { }

  render() {
    return (
      <>
        <Title>Loja de Carros!!</Title>
        <Container>
          <GlobalStyle />

          <BoxList>
            {this.state.car.map((item) => (
              <Card draggable="true" aria-disabled="false">

                <BoxItems
                  style={{
                    backgroundColor: "#D3D3D3",
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                  <SubTitle><b>Nome:</b> {item.Nome}</SubTitle>
                  <Img onClick={() => { this.handleAdd(item.id) }} src={Add} alt="botão add" />
                </BoxItems>
                <BoxItems style={{ display: "flex", flexDirection: "column" }}>
                  <Items><b>Montadora:</b> {item.Montadora}</Items>
                  <Items> <b>Preço:</b> {item.Preço.toFixed(3)}</Items>
                  <Items> <b>Tipo</b> {item.Tipo}</Items>
                </BoxItems>
              </Card>
            ))}
          </BoxList>

          <Box>
            {this.state.listCar.map((item, index) => (
              <Card aria-disabled="true">
                <BoxItems
                  key={index}
                  style={{
                    backgroundColor: "#1E90FF",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "33.5vw",
                    border: " 0.2px #87CEFA  solid"
                  }}>
                  <SubTitle><b>Nome:</b>{item.Nome}</SubTitle>
                  <Img src={Remove} onClick={() => { this.handleRemove(item.id); }} />
                </BoxItems>
                <BoxItems
                  style={{
                    width: "33.5vw",
                    display: "flex",
                    justifyContent: "space-between",
                    border: "0.2px #87CEFA solid"
                  }}>
                  <Items><b>Tipo:</b>{item.Tipo}</Items>
                  <Items><b>Preço: R$:</b>{item.Preço.toFixed(3)}</Items>
                </BoxItems>

              </Card>
            ))}
           
          </Box>
        </Container>

        <PriceCard style={{ width: "33vw" }}>
          <Price>
            <b> Total R$:{ }</b>
            {this.state.listCar.reduce((acc, num) => acc + num.Preço, 0).toFixed(3)}
          </Price>
          <StyledButton onClick={this.handleRemoveAll}>
            <Img src="https://image.flaticon.com/icons/png/512/18/18297.png" alt="lixo" />
          </StyledButton>
        </PriceCard>
      </>
    )
  }
}
