import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import add from './assets/add.svg'
import remove from './assets/remove.svg'
import mcqueen from './assets/car.svg'

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding; 0;
    box-sizing: border-box;
`;
const Container = styled.main`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
`;
const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`;
const TitleCar = styled.div`
display:flex;
height: 30px;
justify-content: space-between;
align-items: center;
padding: 0.1rem;
background-color: #f5f5f5;
`;
const BoxCar = styled.ul`
    text-align: center;
    list-style:none;
    width: 180px;
    height: 150px;
    border: 1px solid #d2d2d2;
    border-radius: 2%;
    margin-left: 1em;
    margin-block-end: 1em;
    padding-inline-start: 0;
    &:hover {
      border: 1px solid #5bc0de;
    }
    &:hover ${TitleCar} {
      background-color: #5bc0de;
    } 
`;
const Li = styled.li`
    margin: 0.3rem;
`;
const TitleList = styled.div`
      display:flex;
      height: 30px;
      justify-content: space-between;
      align-items: center;
      padding: 1px;
      background-color: #5bc0de;
      padding:0.5rem;
`;
const CarInfo = styled.div`
      display:flex;
      justify-content: space-around;
      padding: 1px;
      background-color: white;
`;
const ListContainer = styled.div`
      display:flex;
      flex-direction: column;
      justify-content: space-evenly;
      border: 1px solid #5bc0de;
      list-style:none;
      border-radius: 1%;
      margin: 0.5rem;
      max-heigth: 400px;
      
`;
const ListBox = styled.div`
    border: 1px solid #d2d2d2;
    border-radius: 2%;
    padding:1rem;
    overflow-y: scroll;
    height: 30rem;
    background-image: url(${mcqueen});
    background-repeat: no-repeat;
    
`;
const CarBoxInfo = styled.div`
    width: 50%;
    display: flex;
    flex-flow: wrap;
`;
const MotherBox = styled.div`
    width:30%;
`;
const Draghere = styled.div`
    display:flex;
    justify-content: center;
    height:100%;
    align-items: flex-end;
`;

class App extends Component {

  state = {
    car: [{
        name: 'Jetta',
        company: 'Volkswagen',
        price: 144000,
        type: 'Sedan',
        id: 1,
      },
      {
        name: 'Polo',
        company: 'Wolkswagen',
        price: 70000,
        type: 'Hatch',
        id: 2,
      },
      {
        name: 'T-Cross',
        company: 'Wolkswagen',
        price: 123000,
        type: 'SUV',
        id: 3,
      },
      {
        name: 'Tiguan R-line',
        company: 'Wolkswagen',
        price: 146000,
        type: 'SUV',
        id: 4,
      },
      {
        name: 'Civic',
        company: 'Honda',
        price: 115000,
        type: 'Sedan',
        id: 5,
      },
      {
        name: 'Corolla',
        company: 'Toyota',
        price: 110000,
        type: 'Sedan',
        id: 6,
      },
      {
        name: 'Corolla Cross',
        company: 'Toyota',
        price: 184000,
        type: 'SUV',
        id: 7,
      },
      {
        name: 'Compass',
        company: 'Jeep',
        price: 132000,
        type: 'SUV',
        id: 8,
      },
      {
        name: 'Golf GTI',
        company: 'Volkswagen',
        price: 138000,
        type: 'Hatch',
        id: 9,
      }],
    carlist: [],
    totalprice: []
  }

  handleAdd = (id) => {
    const Vehicles = this.state.car.find((item) => item.id === id);
    const Prices = this.state.totalprice.reduce((acc , num) => acc + num.price, 0)
    if (this.state.carlist !== [this.state.id]) {
      this.setState({
        carlist: this.state.carlist.concat(Vehicles),
        
      },() => this.setState({
        totalprice: this.state.totalprice.concat(this.state.carlist)
      }))
      console.log(Prices)
    }}

  handleRemove = (id) => {
    if (this.state.carlist !== []) {
      this.setState({
        carlist: this.state.carlist.filter((item) => {
          return (item.id !== id)
        }),
        totalprice: this.state.carlist.filter((item) => {
          return (item.id !== id)
        })
      })
  }}
  handleErase = () => {
    if (this.state.carlist && this.state.totalprice !== [])
    this.setState({
      carlist: "",
      totalprice: ""
    })
  }

  render(){
    return (
      <div>
        <GlobalStyle/>
        <Header>
          <h1>Loja de Carros!</h1>
        </Header>   
          <Container>
              <CarBoxInfo>
                {this.state.car.map((item, index) => (
                <BoxCar key={index}>
                    <TitleCar>
                      <Li>{item.name}</Li>
                      <img onClick={() => this.handleAdd(item.id)} src={add} alt="add button" />
                    </TitleCar>
                    <Li><b>Montadora:</b> {item.company} </Li>
                    <Li><b>Preço:</b> R${item.price} </Li>
                    <Li><b>Tipo:</b> {item.type} </Li>
                </BoxCar>
              ))}
              </CarBoxInfo>
                <MotherBox>
                    <ListBox>
                      {this.state.carlist.map((item, index) => (
                      <ListContainer key={index}>
                          <TitleList>
                            <Li>{item.name}</Li>
                            <img onClick={() => this.handleRemove(item.id)} src={remove} alt="remove button" />
                          </TitleList>
                          <CarInfo>
                            <Li><b>Tipo:</b> {item.type} </Li>
                            <Li><b>Preço:</b> R${item.price} </Li>
                          </CarInfo>
                      </ListContainer>
                      ))}  
                        <Draghere>
                          <h4>Arraste seus carros preferidos aqui :)</h4> 
                        </Draghere>  
                    </ListBox>
                       
                        <div>
                          <h4>Total R$: {} {this.state.totalprice.reduce((acc , num) => acc + num.price, 0)} </h4>
                          
                        </div>
                     
                </MotherBox>
            </Container>
      </div>
    );
  }
}

export default App;
