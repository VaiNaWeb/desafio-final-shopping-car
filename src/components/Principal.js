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

  @media (max-width: 950px) {
    width: 50vw;
    overflow: auto;
  }
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

  @media (max-width: 950px) {
    width: 43vw;

    button {
      width: 100px;
    }
  }
`;

// styleds from the cards

const CardContainer = styled.div`
  width: 180px;
  border: solid 1px gray;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.active === true ? 1 : 0.4)};
  font-size: 0.8rem;

  @media (max-width: 950px) {
    margin: 0.3rem;
  }
`;
const TitleContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${props => props.active? '#5BC0DE':''};
    color: ${props => props.active? '#fff': ''};
  }

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

  @media (max-width: 950px) {
    button {
      width: 20px;
      height: 20px;
    }
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

  @media (max-width: 950px) {
    height: 70px;
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

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 950px) {
    font-size: 0.8rem;

    .side-card-content {
      flex-direction: column;
    }

    .side-card-header button {
      width: 15px;
      height: 15px;
    }
  }
`;

export default class Principal extends React.Component {
  state = {
    carros,
    carrosMostrados: [],
    total: [],
    dragged: {},
    count: 0,
  };

  componentDidMount() {
    if (localStorage.getItem("cars")) {
      let valorTotal = JSON.parse(localStorage.getItem("cars"));
      this.setState({
        carrosMostrados: valorTotal,
        total: valorTotal.map((item) => item.preco),
      });

      this.setState({
        carros: JSON.parse(localStorage.getItem('initialCars'))
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.count !== prevState.count) {
      if (!localStorage.getItem("cars")) {
        return;
      } else {
        let valorTotal = JSON.parse(localStorage.getItem("cars"));

        this.setState({
          carrosMostrados: valorTotal,
          total: valorTotal.map((item) => item.preco),
        });
      }
    }
  }

  addCar = (car) => {
    const activeFilter = this.state.carros.map(carro => {
      if(car.id === carro.id){
        return {...carro, active:false}
      } else {
        return carro
      }
    })
    this.setState({
      carrosMostrados: [...this.state.carrosMostrados, car],
      total: [...this.state.total, car.preco],
      count: this.state.count + 1,
      carros: activeFilter
    }, () => localStorage.setItem('initialCars', JSON.stringify(this.state.carros)));

    if (localStorage.getItem("cars")) {
      localStorage.setItem(
        "cars",
        JSON.stringify([...JSON.parse(localStorage.getItem("cars")), car])
      );
    } else {
      localStorage.setItem("cars", JSON.stringify([car]));
    }

    
  };

  removeCar = (car) => {
    const activeFilter = this.state.carros.map(carro => {
      if(car.id === carro.id){
        car.active = true;
        console.log(car)
        return {...carro, active:true}
      } else {
        return carro
      }
    })
    this.setState({
      carrosMostrados: this.state.carrosMostrados.filter(
        (carro) => car.id !== carro.id
      ),
      total: [...this.state.total, -car.preco],
      count: this.state.count - 1,
      carros: activeFilter
    }, () => localStorage.setItem('initialCars', JSON.stringify(this.state.carros)));

    if (JSON.parse(localStorage.getItem("cars")).length < 2) {
      localStorage.removeItem("cars");

      this.setState({
        carros,
      });
    } else {
      let newCars = JSON.parse(localStorage.getItem("cars"));
      localStorage.setItem(
        "cars",
        JSON.stringify(newCars.filter((carro) => car.id !== carro.id))
      );
    }

    
  };

  removelAll = () => {
    
    this.setState({
      carrosMostrados: [],
      total: [],
      carros,
      dragController: 0,
    });

    localStorage.removeItem("cars");
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
            {this.state.carros.map((carro, index) => (
              <CardContainer
                key={index}
                active={carro.active}
                draggable={carro.active}
                onDragStart={() => this.handleDragStart(carro)}
              >
                <TitleContainer active={carro.active} >
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
                    <b>Arraste seus carros preferidos aqui :)</b>
                  </p>
                </div>
              ) : (
                this.state.carrosMostrados.map((carro, index) => (
                  <SideCard draggable="false" key={index}>
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
                {this.state.carrosMostrados.length === 0
                  ? 0
                  : this.state.total.reduce((a, b) => a + b, 0).toFixed(3)}
              </p>
            </Total>
            {this.state.carrosMostrados.length >0? <button onClick={this.removelAll}>Limpar Tudo</button>: ''}
          </SideContainer>
        </Container>
      </Mother>
    );
  }
}
