import React from "react";
import styled from "styled-components";
import Car from "../motores.js/Car";
import img from "../assets/car.svg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .H1-container {
    display: flex;
    height: 10%;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
`;

const Carmotores = styled.div`
  width: 60vw;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1rem;
`;

const Div2 = styled.div`
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

const CarDiv3 = styled.div`
  width: 180px;
  border: solid 1px gray;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.active === true ? 1 : 0.4)};
  font-size: 0.8rem;
`;
const Contenier = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: ${(props) => (props.active ? "#5BC0DE" : "")};
    color: ${(props) => (props.active ? "#fff" : "")};
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
  
`;

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 7vw;
  p {
    line-height: 0;
  }
`;
const SideBox = styled.div`
  border: solid gray 1px;
  width: 80%;
  height: 90%;
  margin: 0 auto; 
 display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center; 
  .img-text {
    width:80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Result = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarrosDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #5bc0de;
  border-radius: 0.25rem;
  width: 90%;
  align-self: flex-start;
  margin: 0.35rem auto;
  .card-header {
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
  .card-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      line-height: 0;
    }
  }
`;

export default class Main extends React.Component {
  state = {
    Car,
    carrosMostra: [],
    total: [],
    dragged: {},
    count: 0
  };

  components() {
    if (localStorage.getItem("cars")) {
      let valorTotal = JSON.parse(localStorage.getItem("cars"));
      this.setState({
        carrosMostrados: valorTotal,
        total: valorTotal.map((item) => item.preco)
      });

      this.setState({
        Car: JSON.parse(localStorage.getItem("iniciarCars"))
      });
    }
  }

  component2(_, prevState) {
    if (this.state.count !== prevState.count) {
      if (!localStorage.getItem("cars")) {
        return;
      } else {
        let valorTotal = JSON.parse(localStorage.getItem("cars"));

        this.setState({
          carrosMostra: valorTotal,
          total: valorTotal.map((item) => item.preco)
        });
      }
    }
  }

  addCar = (car) => {
    const activeFilter = this.state.Car.map((carro) => {
      if (car.id === carro.id) {
        return { ...carro, active: false };
      } else {
        return carro;
      }
    });
    this.setState(
      {
        carrosMostra: [...this.state.carrosMostra, car],
        total: [...this.state.total, car.preco],
        count: this.state.count + 1,
        carros: activeFilter
      },
      () =>
        localStorage.setItem("iniciarCars", JSON.stringify(this.state.carros))
    );

    if (localStorage.getItem("cars")) {
      localStorage.setItem(
        "cars",
        JSON.stringify([...JSON.parse(localStorage.getItem("cars")), car])
      );
    } else {
      localStorage.setItem("cars", JSON.stringify([car]));
    }
  };

  clearCar = (car) => {
    const activeFilter = this.state.carros.map((carro) => {
      if (car.id === carro.id) {
        car.active = true;
        console.log(car);
        return { ...carro, active: true };
      } else {
        return carro;
      }
    });
    this.setState(
      {
        carrosMostra: this.state.carrosMostra.filter(
          (carro) => car.id !== carro.id
        ),
        total: [...this.state.total, -car.preco],
        count: this.state.count - 1,
        carros: activeFilter
      },
      () =>
        localStorage.setItem("iniciarCars", JSON.stringify(this.state.carros))
    );

    if (JSON.parse(localStorage.getItem("cars")).length < 2) {
      localStorage.removeItem("cars");

      this.setState({
        Car
      });
    } else {
      let newCars = JSON.parse(localStorage.getItem("cars"));
      localStorage.setItem(
        "cars",
        JSON.stringify(newCars.filter((carro) => car.id !== carro.id))
      );
    }
  };

  clearAdd = () => {
    this.setState({
      carrosMostra: [],
      total: [],
      Car,
      dragController: 0
    });

    localStorage.clearItem("cars");
  };

  handleChange = (car) => {
    this.setState({
      dragged: car,
      dragController: 1
    });
  };

  handleChange2 = (e) => {
    e.preventDefault();
  };

  handleStrange = () => {
    if (this.state.dragController === 1) {
      this.addCar(this.state.dragged);
      this.setState({
        dragController: 0
      });
    }
  };

  render() {
    return (
      <Div>
        <div>
          <H1>Loja de carros!</H1>
        </div>
        <Title>
          <Carmotores>
            {this.state.Car.map((carro, index) => (
              <CarDiv3
                key={index}
                active={carro.active}
                draggable={carro.active}
                onDragStart={() => this.handleChange(carro)}
              >
                <Contenier active={carro.active}>
                  <h4>{carro.nome}</h4>
                  <button
                    onClick={() => this.addCar(carro)}
                    disabled={!carro.active}
                  >
                    +
                  </button>
                </Contenier>
                <BoxDiv>
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
                </BoxDiv>
              </CarDiv3>
            ))}
          </Carmotores>
          <Div2>
            <SideBox
              onStrange={(e) => this.handleStrange(e)}
              onChange2={(e) => this.handleChange2(e)}
            >
              {" "}
              {this.state.carrosMostra.length < 1 ? (
                <div className="img-text">
                  <img Src={img} alt="carro" />
                  <b>
                    Arraste seus carros preferidos aqui :)
                  </b>
                </div>
              ) : (
                this.state.carrosMostra.map((carro, index) => (
                  <CarrosDiv draggable="false" key={index}>
                    <div className="card-header">
                      <h4>{carro.nome}</h4>
                      <button onClick={() => this.clearCar(carro)}>-</button>
                    </div>
                    <div className="card-content">
                      <p>
                        {" "}
                        <b>Tipo:</b> {carro.tipo}
                      </p>
                      <p>
                        {" "}
                        <b>Preço:</b>R$ {carro.preco.toFixed(3)}
                      </p>
                    </div>
                  </CarrosDiv>
                ))
              )}
            </SideBox>
            <Result>
              <p>Total</p>
              <p>
                R${" "}
                {this.state.carrosMostra.length === 0
                  ? 0
                  : this.state.total.reduce((a, b) => a + b, 0).toFixed(3)}
              </p>
            </Result>
          </Div2>
        </Title>
      </Div>
    );
  }
}
