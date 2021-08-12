import { createGlobalStyle } from "styled-components";
import React, { Component } from 'react'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
`


const Box = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  height:85vh;
  border:solid;
  
`
const Container = styled.main`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
   aling-items:center

`
const Lista = styled.ul`
  display:flex;
  height:30vh;
  
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

const Card = styled.div`
display: flex;
flex-wrap:wrap;
border: 0.6px solid;
width:15vw;
`
const Money = styled.input`
  border:none;
  border-radius:10px 10px 10px 10px;
`
const RemoveImg = styled.img`
  width: 2vw;
  cursor: pointer;
  border: none;
`

export default class CarShopping extends Component {

  state = {
    Car: [
      {
        Nome: "Jetta",
        Montadora: "Volkswagen",
        Preço: 144000,
        Tipo: "Sedan"
      },
      {
        Nome: "Pollo",
        Montadora: "Volkswagen",
        Preço: 70000,
        Tipo: "Hatch"
      },
      {
        Nome: "T-cross",
        Montadora: "Volkswagen",
        Preço: 123000,
        Tipo: "SUV"
      },
      {
        Nome: "Tiguan R-line",
        Montadora: "Volkswagen",
        Preço: 146000,
        Tipo: "SUV"
      },
    ],
    listCar: [],
    price:{}
  }


  handleAdd = () => {
    this.setState({
      listCar: this.state.listCar.concat({
        Car: this.state.Car,
        id: Date.now(),
        price: this.state.Car[0].Preço + this.state.price
      })
    })
    console.log(this.state.listCar)
  }

  handleRemove = (id) => {
    if(this.state.listCar !== []){
      this.setState({
        listCar: this.state.listCar.filter((item) =>{
        return (item.id !==id)
        })
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      price: Number(e.target.value)
    });
    console.log(e)
  };

  render() {
    return (
      <>
        <h1>Loja de Carros!!</h1>
        <Container>

          {this.state.Car.map((item) => (<Lista>
            <Items>
              <Card style={{backgroundColor:"slategray",
               display:"flex",
                justifyContent:"space-evenly"}}>Nome: {item.Nome} <button onClick={() => { this.handleAdd() }}>+</button></Card>
              <Card> Montadora: {item.Montadora}</Card>
              <Card>Preço: R${item.Preço}</Card>
              <Card>  Tipo: {item.Tipo}</Card>
              <Card></Card>
            </Items>
          </Lista>
          ))}

          <Box>
            <ul style={{listStyle:"none"}}>
              {this.state.listCar.map((item) => (
                <li>
                  <Card style={{backgroundColor:"slategray"}}>Nome: {item.Nome} </Card>
                  <Card> Montadora: {item.Montadora}</Card>
                  <Card>Preço: R${item.Preço}</Card>
                  <Card>  Tipo: {item.Tipo}</Card>
                  <Card> <Remove onClick={() => {
                    this.handleRemove(item.id);
                  }}>
                    <RemoveImg
                      src="https://image.flaticon.com/icons/png/512/18/18297.png"
                      alt="lixo" />
                  </Remove>
                  </Card>
                </li>
              ))}
            </ul>
            <Card>
              R$<Money onChange={this.handleChange} type="number" placeholder={0} />
            </Card>
          </Box>
        </Container>
      </>
    )
  }
}
