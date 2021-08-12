import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 95vh;
`;
class CarShop extends Component {
  state = {
    cars: [
      {
        name: 'Jetta',
        company: 'Volkswagen',
        price: 'R$144.000',
        type: 'Sedan'
      },
      {
        name: 'Polo',
        company: 'Wolkswagen',
        price: 'R$70.000',
        type: 'Hatch'
      },
      {
        name: 'T-Cross',
        company: 'Wolkswagen',
        price: 'R$123.000',
        type: 'SUV'
      },
      {
        name: 'Tiguan R-line',
        company: 'Wolkswagen',
        price: 'R$146.000',
        type: 'SUV'
      },
      {
        name: 'Civic',
        company: 'Honda',
        price: 'R$115.000',
        type: 'Sedan'
      },
      {
        name: 'Corolla',
        company: 'Toyota',
        price: 'R$110.000',
        type: 'Sedan'
      },
      {
        name: 'Corolla Cross',
        company: 'Toyota',
        price: 'R$184.000',
        type: 'SUV'
      },
      {
        name: 'Compass',
        company: 'Jeep',
        price: 'R$132.000',
        type: 'SUV'
      },
      {
        name: 'Golf GTI',
        company: 'Volkswagen',
        price: 'R$138.000',
        type: 'Hatch'
      }
    ]
  };
  render() {
    return (
      <Container>
        <div>
          <h1>Loja de carros!</h1>
        </div>
      </Container>
    );
  }
}
export default CarShop;
