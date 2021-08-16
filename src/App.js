import React, { Component } from 'react';
import Add from './assets/add.svg'
import Remove from './assets/remove.svg'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`;
  box-sizing:border-box;
  padding:0;
  margin:0;
`
const Container = styled.div`
  width:100%;
`;
const Title = styled.div`
  height:15vh;  
  font-size:1.3em;
  display:flex;
  justify-content:center;
  align-items:center;
`
const ShopWrapper = styled.div`  
  display:flex;
  justify-content: space-evenly;
`
const CardContainer = styled.div`
  width:65%; 
  height:max-content; 
  display:flex;
  flex-wrap:wrap;
`
const Card = styled.div`
  width: 12rem;
  height: 8.75rem;
  border: solid 1px gray;
  border-radius: 6px;
  text-align: center;
  margin: 0px 8px 16px;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover{
    border: solid 1px skyblue;
    transform:scale(1.05);
    transition: .3s;
  }
  }
`;
const CarName = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
  background-color: rgb(245, 245, 245);
  color: rgb(51, 51, 51);
  border-bottom: solid 1px gray;
  &:hover{
    color: #fff;
    background-color: skyblue;
    border-bottom: solid 1px skyblue;
  }
`;
const ListContainer = styled.div`
  width: 30%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const List = styled.div`
  width:100%;
  height:90%;
  border:solid 1px gray;
  overflow-y: scroll;
  background-image: url('./assets/car.svg')
`;
const ListCard = styled.div`
  width: 95%;
  height: 5.75rem;
  border: solid 1px skyblue;
  border-radius: 6px;
  text-align: center;
  margin: 0px 8px 16px;
  cursor: pointer;
  font-size: 0.8rem;
`;
const ListCarName = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
  color: #fff;
  background-color: skyblue;
  border-bottom: solid 1px skyblue;
`;
const ListCarProps = styled.div`
  display: flex;
  justify-content: space-evenly;
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
        id:1,
        name: 'Jetta',
        company: 'Volkswagen',
        price: 144000,
        type: 'Sedan',
      },
      {
        id:2,
        name: 'Polo',
        company: 'Wolkswagen',
        price: 70000,
        type: 'Hatch',
      },
      {
        id:3,
        name: 'T-Cross',
        company: 'Wolkswagen',
        price: 123000,
        type: 'SUV',
      },
      {
        id:4,
        name: 'Tiguan R-line',
        company: 'Wolkswagen',
        price: 146000,
        type: 'SUV',
      },
      {
        id:5,
        name: 'Civic',
        company: 'Honda',
        price: 115000,
        type: 'Sedan',
      },
      {
        id:6,
        name: 'Corolla',
        company: 'Toyota',
        price: 110000,
        type: 'Sedan',
      },
      {
        id:7,
        name: 'Corolla Cross',
        company: 'Toyota',
        price: 184000,
        type: 'SUV',
      },
      {
        id:8,
        name: 'Compass',
        company: 'Jeep',
        price: 132000,
        type: 'SUV',
      },
      {
        id:9,
        name: 'Golf GTI',
        company: 'Volkswagen',
        price: 138000,
        type: 'Hatch',
      }
    ],
    shopList: [],
    total: []
  };

  
  addCar = (id) => {
    const {cars, shopList} = this.state
    const carList = cars.find((item) => item.id === id);
    const carValue = shopList.map(item => item.price)
    const listPrice= carValue.reduce((total, item)=> total + item, 0) 
    this.setState({
      shopList: shopList.concat(carList),
      total: listPrice
    })
    
  }

  removeCar = (id) => {
    const {shopList} = this.state
    const carValue = shopList.map(item => item.price)
    const listPrice= carValue.reduce((total, numero)=> total - numero,0)
    if (shopList !== []) {
      this.setState({
        shopList: shopList.filter((item) => {
          return (item.id !== id)
        }),
        total: listPrice
      })
    }
    console.log(listPrice)
  }
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>
          <h1>Loja de carros!</h1>
        </Title>
        <ShopWrapper>
          <CardContainer>
            {this.state.cars.map((item, index) => (
              <Card key={index}>
                <CarName>
                  <h3>{item.name}</h3>
                  <img onClick={() => { this.addCar(item.id) }} src={Add} alt="" />
                </CarName>
                <div>
                  <p><b>Montadora:</b> {item.company}</p>
                  <p><b>Preço:</b> {item.price}</p>
                  <p><b>Tipo:</b> {item.type}</p>
                </div>
              </Card>
            ))}
          </CardContainer>
          <ListContainer>
            <List>
              {this.state.shopList.map(item => (
                <ListCard>
                  <ListCarName>
                    <h3>{item.name}</h3>
                    <img onClick={() => { this.removeCar(item.id); }} src={Remove} alt="" />
                  </ListCarName>
                  <ListCarProps>
                    <p><b>Tipo:</b> {item.type}</p>
                    <p><b>Preço:</b> {item.price}</p>
                  </ListCarProps>
                </ListCard>
              ))}
            </List>
            <Total>
              <h2>Total</h2>
              <h2>{this.state.total}</h2>
            </Total>
          </ListContainer>
        </ShopWrapper>
      </Container>
    );
  }
}
export default CarShop;
