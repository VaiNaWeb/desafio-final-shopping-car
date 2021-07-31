import React from "react";
import styled from "styled-components";
import carros from "../dados/carros.js";
import carImg from "../assets/car.png";

const Mother = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .title-container {
    display: flex;
    height: 10%;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
`;

const CardsContainer = styled.div`
  width: 60vw;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1rem;
`;

const SideContainer = styled.div`
  width: 38vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background: #000;
    color: #fff;
    outline: none;
    border: 1px solid #5bc0de;
    border-radius: 0.25rem;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`;

// styleds from the cards

const CardContainer = styled.div`
  width: 14vw;
  border: solid 1px gray;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.active === true ? 1 : 0.4)};
  font-size: 0.8rem;
`;
const TitleContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 2vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin: 0.35rem;
  }

  button {
    margin: 0.35rem;
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 50%;
    width: 1.5vw;
    height: 1.5vw;
    cursor: pointer;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 7vw;

  p {
    line-height: 0;
  }
`;
// Styled from side

const ViewSide = styled.div`
  border: solid gray 1px;
  width: 80%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;

  .img-text {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Total = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #5bc0de;
  border-radius: 0.25rem;
  width: 90%;
  align-self: flex-start;
  margin: 0.35rem auto;

  .side-card-header {
    background-color: #5bc0de;
    width: 100%;
    height: 3vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    h4 {
      margin-left: 0.5rem;
    }

    button {
      margin-right: 0.5rem;
      background: #fff;
      color: #5bc0de;
      border: none;
      outline: none;
      border-radius: 50%;
      width: 1.5vw;
      height: 1.5vw;
      cursor: pointer;
    }
  }

  .side-card-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
      line-height: 0;
    }
  }
`;

export default class Principal extends React.Component {
  state = {
    carros,
    carrosMostrados: [],
    total: [],
    dragged: {},
  };

  addCar = (car) => {
    car.active = false;
    this.setState({
      carrosMostrados: [...this.state.carrosMostrados, car],
      total: [...this.state.total, car.preco],
    });
  };

  removeCar = (car) => {
    car.active = true;
    this.setState({
      carrosMostrados: this.state.carrosMostrados.filter(
        (carro) => car.id !== carro.id
      ),
      total: [...this.state.total, -car.preco],
    });
  };

  removelAll = () => {
    const allTrue = this.state.carros.map((carro) => ({
      ...carro,
      active: true,
    }));
    console.log(allTrue);
    this.setState({
      carrosMostrados: [],
      total: [],
      carros: allTrue,
      dragController: 0,
    });
  };

  handleDragStart = (car) => {
    this.setState({
      dragged: car,
      dragController: 1,
    });
  };

  handleDragOver = (e) => {
    e.preventDefault();
  };

  handleDrop = () => {
    if (this.state.dragController === 1) {
      this.addCar(this.state.dragged);
      this.setState({
        dragController: 0,
      });
    }
  };

  render() {
    return (
      <Mother>
        <div className="title-container">
          <Title>Loja de carros!</Title>
        </div>
        <Container>
          <CardsContainer>
            {this.state.carros.map((carro) => (
              <CardContainer
                active={carro.active}
                draggable={carro.active}
                onDragStart={() => this.handleDragStart(carro)}
              >
                <TitleContainer>
                  <h4>{carro.nome}</h4>
                  <button
                    onClick={() => this.addCar(carro)}
                    disabled={!carro.active}
                  >
                    +
                  </button>
                </TitleContainer>
                <SecondContainer>
                  <p>
                    {" "}
                    <b>Montadora:</b> {carro.montadora}
                  </p>
                  <p>
                    {" "}
                    <b>Preço:</b> R$ {carro.preco.toFixed(3)}
                  </p>
                  <p>
                    {" "}
                    <b>Tipo:</b> {carro.tipo}
                  </p>
                </SecondContainer>
              </CardContainer>
            ))}
          </CardsContainer>
          <SideContainer>
            <ViewSide
              onDrop={(e) => this.handleDrop(e)}
              onDragOver={(e) => this.handleDragOver(e)}
            >
              {" "}
              {this.state.carrosMostrados.length < 1 ? (
                <div className="img-text">
                  <img src={carImg} alt="a red car" style={{ width: "10vw" }} />
                  <p>
                    <b>Arraste seus carros prefirodos aqui :)</b>
                  </p>
                </div>
              ) : (
                this.state.carrosMostrados.map((carro) => (
                  <SideCard draggable="false">
                    <div className="side-card-header" draggable="false">
                      <h4>{carro.nome}</h4>
                      <button onClick={() => this.removeCar(carro)}>-</button>
                    </div>
                    <div className="side-card-content">
                      <p>
                        {" "}
                        <b>Tipo:</b> {carro.tipo}
                      </p>
                      <p>
                        {" "}
                        <b>Preço:</b>R$ {carro.preco.toFixed(3)}
                      </p>
                    </div>
                  </SideCard>
                ))
              )}
            </ViewSide>
            <Total>
              <p>Total</p>
              <p>
                R${" "}
                {this.state.carrosMostrados.length === 0 ? 0 : this.state.total.reduce((a, b) => a + b, 0).toFixed(3)}
              </p>
            </Total>
            <button onClick={this.removelAll}>Limpar Tudo</button>
          </SideContainer>
        </Container>
      </Mother>
    );
  }
}
