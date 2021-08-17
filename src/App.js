import { createGlobalStyle } from "styled-components";
import React, { Component } from 'react'
import styled from 'styled-components'


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
const SubTitle = styled.h4`
opacity:0.8;
`

const BoxList = styled.div`
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 flex-wrap:wrap;
 width:60vw;
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
  
`
const Container = styled.main`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
   aling-items:center

`
const Lista = styled.ul`
  display:flex;
  height:30vh;
  width:16vw;
  justify-content:center;
  align-items:center; 
  list-style:none;
`
const Remove = styled.button`
  background-color: transparent;
  border: none;
`;
const Items = styled.li`
  flex-direction:column;
  display:flex;
  height:15vh;
  align-items:center;
  justify-content:center;
`

const Card = styled.p`
display: flex;
flex-wrap:wrap;
border: 0.6px solid;
width:15vw;
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
    totalPrice: []
  }
  

  handleAdd = (id) => {
    const Carros = this.state.car.find((item) => item.id === id);
    
    this.setState({
      listCar: this.state.listCar.concat(Carros),
      
    }, () => this.setState({
      totalPrice: this.state.totalPrice.concat(this.state.listCar)
    }))
    
    console.log(Carros)
  }

  handleRemove = (id) => {
    if (this.state.listCar !== []) {
      this.setState({
        listCar: this.state.listCar.filter((item) => {
          return (item.id !== id)
        }),
        totalPrice: this.state.totalPrice.filter((item) =>{
          return (item.id !==id)
        })
      })
    }
  }




  render() {
    return (
      <>
        <h1>Loja de Carros!!</h1>
        <Container>
          <GlobalStyle />
          <BoxList>
            {this.state.car.map((item, index) => (<Lista key={index}>
              <Items>
                <Card style={{ backgroundColor: "#F5F5F5", display: "flex", justifyContent: "space-evenly" }}>
                  <SubTitle><b>Nome:</b> {item.Nome}</SubTitle>
                  <button onClick={() => { this.handleAdd(item.id) }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg></button>
                </Card>
                <Card><b> Montadora:</b> {item.Montadora}</Card>
                <Card><b>Preço: R$:</b>{item.Preço.toFixed(3)}</Card>
                <Card> <b> Tipo:</b> {item.Tipo}</Card>
              </Items>
            </Lista>
            ))}
          </BoxList>
          <Box>
            <ul style={{ listStyle: "none" }}>
              {this.state.listCar.map((item, index) => (
                <li key={index}>
                  <Card style={{ backgroundColor: "#1E90FF", display: "flex", justifyContent: "space-evenly" }}>
                    <SubTitle><b>Nome:</b> {item.Nome}</SubTitle>
                    <Remove onClick={() => { this.handleRemove(item.id); }}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" /></svg>
                    </Remove>
                  </Card>

                  <Card><b>Tipo:</b> {item.Tipo} <b>Preço: R$:</b>{item.Preço.toFixed(3)}</Card>
                </li>
              ))}
            </ul>
            <Card style={{ width: "33vw" }}>
              <p> Total R$:{}
              {this.state.listCar.length === 0  ? 0 :this.state.totalPrice.reduce((acc, num) => acc + num.Preço, 0).toFixed(3)}  
              </p>
            </Card>
          </Box>
          
        </Container>

      </>
    )
  }
}
