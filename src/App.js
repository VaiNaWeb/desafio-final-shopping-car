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
  
  .card&:hover{
    border: solid 1px skyblue;
    transform:scale(1.05);
    transition: .3s;
    .header{
      color: #fff;
      background-color: skyblue;
      border-bottom: solid 1px skyblue;
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
const ClearButton = styled.div`
padding-bottom: 1rem;
.button{
  width:8rem;
  height: 2.5rem;
  background-color: rgb(245, 245, 245);
  border:solid gray 1px;
  border-radius: 6px;
  font-weight: bold;
}
&:hover .button{
  background-color: skyblue;
  border:solid skyblue 1px;
  color: white;
}
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
        isDisabled:false
      },
      {
        id:2,
        name: 'Polo',
        company: 'Wolkswagen',
        price: 70000,
        type: 'Hatch',
        isDisabled:false
      },
      {
        id:3,
        name: 'T-Cross',
        company: 'Wolkswagen',
        price: 123000,
        type: 'SUV',
        isDisabled:false
      },
      {
        id:4,
        name: 'Tiguan R-line',
        company: 'Wolkswagen',
        price: 146000,
        type: 'SUV',
        isDisabled:false
      },
      {
        id:5,
        name: 'Civic',
        company: 'Honda',
        price: 115000,
        type: 'Sedan',
        isDisabled:false
      },
      {
        id:6,
        name: 'Corolla',
        company: 'Toyota',
        price: 110000,
        type: 'Sedan',
        isDisabled:false
      },
      {
        id:7,
        name: 'Corolla Cross',
        company: 'Toyota',
        price: 184000,
        type: 'SUV',
        isDisabled:false
      },
      {
        id:8,
        name: 'Compass',
        company: 'Jeep',
        price: 132000,
        type: 'SUV',
        isDisabled:false
      },
      {
        id:9,
        name: 'Golf GTI',
        company: 'Volkswagen',
        price: 138000,
        type: 'Hatch',
        isDisabled:false
      }
    ],
    shopList: []
  };

  
  addCar = (id) => {
    const {shopList, cars} = this.state
    const carList = cars.find((item) => item.id === id)
    const mapList = cars.map( item => {
      if(item.id === id){
        return {...item, isDisabled:true}
      }
      return item
    } )
    this.setState({
      shopList: shopList.concat(carList),
      cars: mapList
    })
  }

  removeCar = (id) => {
    const {shopList, cars} = this.state
    const mapList = cars.map( item => {
      if(item.id === id){
        return {...item, isDisabled:false}
      }
      return item
    } )
    if (shopList.length > 0) {
      this.setState({
        shopList: shopList.filter((item) => {
          return (item.id !== id)
        }),
        cars: mapList
      })
    }
  }

  clearShopList = (id) =>{
    const {shopList, cars} = this.state
    this.setState({
      shopList: shopList.filter((item) => {
        return (item.id === id)
      }),
      cars: cars
    })
  }


  render() {
    const {shopList, cars} = this.state
    return (
      <Container>
        <GlobalStyle />
        <Title>
          <h1>Loja de carros!</h1>
        </Title>
        <ShopWrapper>
          <CardContainer>
            {cars.map((item, index) => (
              <Card 
              className="card" 
              key={index}
              style={item.isDisabled === false ? {Card} : {pointerEvents:"none", opacity:"0.4"}}
              >
                <CarName className="header">
                  <h3>{item.name}</h3>
                  <img onClick={() => {this.addCar(item.id)}} src={Add} alt="" />
                </CarName>
                <div>
                  <p><strong>Montadora:</strong> {item.company}</p>
                  <p><strong>Preço:</strong> {item.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
                  <p><strong>Tipo:</strong> {item.type}</p>
                </div>
              </Card>
            ))}
          </CardContainer>
          <ListContainer>
            <List>
              {shopList.map(item => (
                <ListCard>
                  <ListCarName>
                    <h3>{item.name}</h3>
                    <img onClick={() => {this.removeCar(item.id)}} src={Remove} alt="" />
                  </ListCarName>
                  <ListCarProps>
                    <p><b>Tipo:</b> {item.type}</p>
                    <p><b>Preço:</b> {item.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
                  </ListCarProps>
                </ListCard>
              ))}
            </List>
            <Total>
              <h2>Total</h2>
              <h2>{shopList.reduce((total, item)=> total + item.price, 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h2>
            </Total>
            <ClearButton>
              <button className="button" onClick={() => {this.clearShopList()}}>Clear shop list</button>
            </ClearButton>
          </ListContainer>
        </ShopWrapper>
      </Container>
    );
  }
}
export default CarShop;
