import React, { Component } from "react";
import styled from "styled-components";

const Global = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Cars = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: solid red;
  flex-direction: row;
`;
const Market = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Carlist = styled.ul`
  display: flex;
  flex-direction: column;
  border: solid;
`;
const Information = styled.li`
  display: flex;
  flex-direction: column;
`;
const Selection = styled.ul`
  display: flex;
  flex-direction: column;
`;
const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: solid blue;
`;
const Title = styled.li`
  display: flex;
  flex-direction: row;
  border: solid blue;
`;
const Clean = styled.button``;
const Result = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class App extends Component {
  state = {
    listcars: [],
    cars: [
      {
        id: 1,
        name: "Jetta",
        montadora: "Volkswagen",
        tipo: "Sedan",
        preço: 144.0
      },
      {
        id: 2,
        name: "Polo",
        montadora: "Volkswagen",
        tipo: "Hatch",
        preço: 70.0
      },
      {
        id: 3,
        name: "T-Across",
        montadora: "Volkswagen",
        tipo: "SUV",
        preço: 123.0
      },
      {
        id: 4,
        name: "Tiguan R-line",
        montadora: "Volkswagen",
        tipo: "SUV",
        preço: 146.0
      },
      {
        id: 5,
        name: "Civic",
        montadora: "Honda",
        tipo: "Sedan",
        preço: 115.0
      },
      {
        id: 6,
        name: "Corolla",
        montadora: "Toyota",
        tipo: "Sedan",
        preço: 110.0
      },
      {
        id: 7,
        name: "Corolla Cross",
        montadora: "Toyota",
        tipo: "SUV",
        preço: 184.0
      },
      {
        id: 8,
        name: "Compass",
        montadora: "Jeep",
        tipo: "SUV",
        preço: 132.0
      },
      {
        id: 9,
        name: "Golf GTI",
        montadora: "Volkswagen",
        tipo: "Hatch",
        preço: 138.0
      }
    ]
  };
  add = (id) => {
    const cars = this.state.cars.filter((item) => item === id);
    this.setState({
      listcars: this.state.listcars.concat(cars)
    });
  };
  clear = (id) => {
    this.setState({
      listcars: this.state.listcars.filter((item) => {
        return item.id !== id;
      })
    });
  };
  clearall = (id) => {
    this.setState({
      listcars: this.state.listcars.filter((item) => {
        return "";
      })
    });
  };

  render() {
    return (
      <Global>
        <Header>
          <h1>Loja de carros!</h1>
        </Header>
        <Main>
          <Cars>
            <section class="cars">
              {this.state.cars.map((item) => (
                <Carlist>
                  <button onClick={() => this.add(item)}>
                    <Information>{item.name}</Information>
                  </button>
                  <Information>{"Montadora: " + item.montadora}</Information>
                  <Information>{"Preço: " + item.preço}</Information>
                  <Information>{"Tipo: " + item.tipo}</Information>
                </Carlist>
              ))}
            </section>
          </Cars>
          <Market>
            <div>
              {this.state.listcars.map((item) => (
                <Selection>
                  <Title>
                    {item.name}
                    <button
                      onClick={() => {
                        this.clear(item.id);
                      }}
                    >
                      -
                    </button>
                  </Title>
                  <List>
                    <p>{item.preço}</p>
                    <p>{item.tipo}</p>
                  </List>
                </Selection>
              ))}
            </div>
            <Clean onClick={this.clearall}>Aperte aqui</Clean>
            <Result>
              Total: R$ {this.state.listcars.reduce((a, b) => a + b.preço, 0)}
            </Result>
          </Market>
        </Main>
      </Global>
    );
  }
}

export default App;