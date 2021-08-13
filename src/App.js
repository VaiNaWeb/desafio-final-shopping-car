import React, { Component } from 'react';
import Add from './assets/add.svg'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  padding:0;
  margin:0;
  box-sizing:border-box;

`
const Container = styled.div`
  width:100%;
`;
const Title = styled.div`
  font-size:2vw;
  display:flex;
  justify-content:center;
`
const ShopWrapper = styled.div`  
  display:flex;
  justify-content: space-evenly;
`
const CardContainer = styled.div`
  width:55%; 
  height:max-content; 
  display:flex;
  flex-wrap:wrap;
`
const Card = styled.div`
  width: 13.75rem;
  height: 8.75rem;
  border: solid 1px gray;
  border-radius: 6px;
  text-align: center;
  margin: 0px 8px 16px;
  cursor: pointer;
  font-size: 0.8rem;
`;
const CarName = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
  background-color: rgb(245, 245, 245);
  color: rgb(51, 51, 51);
  border-bottom: solid 1px gray;
`;
const ListContainer = styled.div`
  width: 30%;
  height: 90%;
  min-height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const List = styled.div`
width:100%;
height:80vh;
border:solid 1px gray;
`
const Total = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
`
class CarShop extends Component {
  state = {
    cars: [
      {
        name: 'Jetta',
        company: 'Volkswagen',
        price: 144000,
        type: 'Sedan'
      },
      {
        name: 'Polo',
        company: 'Wolkswagen',
        price: 70000,
        type: 'Hatch'
      },
      {
        name: 'T-Cross',
        company: 'Wolkswagen',
        price: 123000,
        type: 'SUV'
      },
      {
        name: 'Tiguan R-line',
        company: 'Wolkswagen',
        price: 146000,
        type: 'SUV'
      },
      {
        name: 'Civic',
        company: 'Honda',
        price: 115000,
        type: 'Sedan'
      },
      {
        name: 'Corolla',
        company: 'Toyota',
        price:110000,
        type: 'Sedan'
      },
      {
        name: 'Corolla Cross',
        company: 'Toyota',
        price: 184000,
        type: 'SUV'
      },
      {
        name: 'Compass',
        company: 'Jeep',
        price: 132000,
        type: 'SUV'
      },
      {
        name: 'Golf GTI',
        company: 'Volkswagen',
        price: 138000,
        type: 'Hatch'
      }
    ],
    shopList:[]
  };

  addCar = () =>{

  }
  render() {
    return (
      <Container>
        <GlobalStyle/>
        <Title>
          <h1>Loja de carros!</h1>
        </Title>
        <ShopWrapper>
          <CardContainer>
            {this.state.cars.map(item => (
              <Card>
                <CarName>
                  <h3>{item.name}</h3>
                  <img src={Add} alt=""/>
                </CarName>
                <div>
                  <p><b>Montadora:</b> {item.company}</p>
                  <p><b>Preço:</b> {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p><b>Tipo:</b> {item.type}</p>
                </div>
              </Card>
            ))}
          </CardContainer>
          <ListContainer>
              <List>
              </List>
              <Total>
                <h2>Total</h2>
                <h2>00</h2>
              </Total>
          </ListContainer>
        </ShopWrapper>
      </Container>
    );
  }
}
export default CarShop;
