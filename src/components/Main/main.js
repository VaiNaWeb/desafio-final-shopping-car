import React, { Component } from "react";
import carros from "../../dados/carros.js";
import styled from "styled-components";
import Car from "../../assets/car.svg";
import ADD from "../../assets/add.svg";
import Remove from "../../assets/remove.svg";
import Limpar from "../../assets/LIXEIRA.png";




const ContainerBoxCartLdc = styled.div`
  display: flex;
  /* background-color: green; */
  width: 100%;
  justify-content: space-around;
`;

const BoxCartCar = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;
  max-height: 50vh;
  width: 40%;
  /* background-color: gray; */
  border-style: 16px;
`;

const CartCar = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 120px;
  border-radius: 6px;
  border: solid 1px #e6e6e6;  
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.1);
  cursor: grab;
  opacity: ${(props) => (props.mostrar === true ? 1 : 0.2)};
  font-size: 0.8rem;
  transition: 0.1s;
  &:hover {
    border-color: #5bc0de;
    transform: scale(1.2);
  }
`;

const CartCarLdc = styled.div`
  width: 80%;
  margin-top: 10px;
  border-width: 1px;
  border-radius: 1%;
  cursor: grab;
  transition: 0.1s;
  &:hover {
    transform: scale(1.2);
  }
`;

const ListCar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60%;
  width: 100%;
  border-radius: 5%;
`;

const ListCarLdc = styled.ul`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-left: 1px solid rgb(91, 192, 222);
  border-right: 1px solid rgb(91, 192, 222);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom: 1px solid rgb(91, 192, 222);
`;

const TtlBtBox = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  & :hover {
    background-color: #5bc0de;
    border-color: #5bc0de;
  }
`;

const TtlBtBoxLdc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  color: white;
  font-size: 10px;  
  background-color: #5bc0de;
  border-color: #5bc0de;
  border-top: 6px solid rgb(91, 192, 222);
  border-left: 6px solid rgb(91, 192, 222);
  border-right: 6px solid rgb(91, 192, 222);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  & :hover {
  border-color: #5bc0de;
  }
`;

const TtlBt = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-width: 1px;  
  border-color: lightgray;
  border-top-right-radius: 5px;  
  font-size: 14px;
  font-weight: bold;
  
`;

const TtlBtLdc = styled.h2`
margin-left: 10px;
`;

const Btt = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const IMGBt = styled.img`
  width: 100%;
  height: 100%;
`;
const IMGBtTrash = styled.img`
  width: 40px;
  transition: 0.1s;
  &:hover {
  transform: scale(1.4);
  }
`;

const BlackItem = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const ShoppingList = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: top;
  min-height: 60vh;
  width: 40%;
  /* background-color: rgb(128, 47, 0); */
`;

const BoxCT = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  border-width: 3px;
  border-style: solid;
   border-color: #f5f5f5;
  width: 80%;
  height: 70vh;
  overflow: auto;
`;

const SectionDrag = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  align-self: center;
  margin-top: 5px;
  text-align:center
`;

const IMG = styled.img`
  width: 400px;
  height: 400px
  
`;

const BoxResult = styled.div`
  display: flex;
  justify-content: flex-end;
  /* background-color: rgb(255, 0, 106); */
  align-items: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* background-color: pink; */
  align-items: center;
  width: 50%;
`;

const BoxStore = styled.div``;
const Total = styled.p``;
const PGrab = styled.p``;
const ListItem = styled.li``
const ListItemLdc = styled.li``
const TtlResult = styled.h3``

class Main extends Component {
  state = { carros, listaDeCompras: [], total: [], contador: 0 };

  addCarros = (crr) => {
    let filtrar = this.state.carros.map((carro) => {
      if (crr.id === carro.id) {
        return { ...carro, mostrar: false };
      } else {
        return carro;
      }
    });
    this.setState(
      {
        listaDeCompras: [...this.state.listaDeCompras, crr],
        total: [...this.state.total, crr.preço],
        contador: this.state.contador + 1,
        carros: filtrar
      },
      () =>
        localStorage.setItem(
          "carrosIniciais",
          JSON.stringify(this.state.carros)
        )
    );
    if (localStorage.getItem("cars")) {
      localStorage.setItem(
        "cars",
        JSON.stringify([...JSON.parse(localStorage.getItem("cars")), crr])
      );
    } else {
      localStorage.setItem("cars", JSON.stringify([crr]));
    }
  };

  retirarCarros = (crr) => {
    let filtrar = this.state.carros.map((carro) => {
      if (crr.id === carro.id) {
        crr.mostrar = true;
        // console.log(crr);
        return { ...carro, mostrar: true };
      } else {
        return carro;
      }
    });
    this.setState(
      {
        listaDeCompras: this.state.listaDeCompras.filter(
          (qualquercoisa) => crr.id !== qualquercoisa.id
        ),
        total: [...this.state.total, crr.preço],
        contador: this.state.contador - 1,
        carros: filtrar
      },
      () =>
        localStorage.setItem(
          "carrosIniciais",
          JSON.stringify(this.state.carros)
        )
    );

    if (JSON.parse(localStorage.getItem("cars")).length < 2) {
      localStorage.removeItem("cars");

      this.setState({});
    } else {
      let NovosCarros = JSON.parse(localStorage.getItem("cars"));
      localStorage.setItem(
        "cars",
        JSON.stringify(
          NovosCarros.filter((qualquercoisa) => crr.id !== qualquercoisa.id)
        )
      );
    }
  };

  limpacarrinho = () => {
    const mostrarTrue = this.state.carros.map((carronovo) => ({
      ...carronovo,
      mostrar: true
    }));
    this.setState({
      carros: mostrarTrue,
      listaDeCompras: []
    });
    localStorage.removeItem("cars");
  };

  componentDidMount() {
    if (localStorage.getItem("cars")) {
      let valorTotal = JSON.parse(localStorage.getItem("cars"));
      this.setState({
        listaDeCompras: valorTotal,
        total: valorTotal.map((item) => item.preço)
      });

      this.setState({
        carros: JSON.parse(localStorage.getItem("carrosIniciais"))
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contador !== prevState.contador) {
      if (!localStorage.getItem("cars")) {
        return;
      } else {
        let valorTotal = JSON.parse(localStorage.getItem("cars"));

        this.setState({
          listaDeCompras: valorTotal,
          total: valorTotal.map((item) => item.preço)
        });
      }
    }
  }

  render() {
    return (
      <BoxStore>
        <ContainerBoxCartLdc>
          <BoxCartCar>
            {this.state.carros.map((item, index) => (
              <CartCar mostrar={item.mostrar} key={index}>
                <TtlBtBox>
                  <TtlBt>
                    {item.nome}{" "}
                    <Btt
                      onClick={() => this.addCarros(item)}
                      disabled={!item.mostrar}
                    >
                      <IMGBt src={ADD} alt="ADD" />
                    </Btt>
                  </TtlBt>
                </TtlBtBox>
                <ListCar>
                  <ListItem>
                    <BlackItem>Montadora:</BlackItem> {item.montadora}
                    </ListItem>
                    <ListItem>
                    <BlackItem>Preço:</BlackItem>
                    {item.preço.toLocaleString("pt-br", {
                      maximumSignificantDigits: 3,
                      style: "currency",
                      currency: "BRL"
                    })}
                  </ListItem>
                  <ListItem>
                    <BlackItem>Tipo:</BlackItem> {item.tipo}
                    </ListItem>
                </ListCar>
              </CartCar>
            ))}
          </BoxCartCar>
          <ShoppingList>
            <BoxCT>
              {this.state.listaDeCompras.length < 1 ? (
            <SectionDrag>
                <IMG src={Car} alt="Carro" />
                <PGrab>Arraste seus carros preferidos aqui :)</PGrab>
              </SectionDrag>
              ) : (
              this.state.listaDeCompras.map((ldc, index) => (
                <CartCarLdc key={index}>
                  <TtlBtBoxLdc>
                    <TtlBtLdc>{ldc.nome}</TtlBtLdc>
                    <Btt onClick={() => this.retirarCarros(ldc)}>
                      <IMGBt src={Remove} alt="REMOVER" />
                    </Btt>
                  </TtlBtBoxLdc>
                  <ListCarLdc>
                    <ListItemLdc>
                      <BlackItem>Preço:</BlackItem>
                      {ldc.preço.toLocaleString("pt-br", {
                        maximumSignificantDigits: 3,
                        style: "currency",
                        currency: "BRL"
                      })}
                    </ListItemLdc>
                    <ListItemLdc>
                      <BlackItem>Tipo:</BlackItem> {ldc.tipo}
                    </ListItemLdc>
                  </ListCarLdc>
                </CartCarLdc>
              ))
              )}              
            </BoxCT>
          </ShoppingList>
        </ContainerBoxCartLdc>
        <BoxResult>
          <Result>
            <TtlResult>Total</TtlResult>
            <Total>
              {this.state.listaDeCompras
                .map((ldc) => ldc.preço)
                .reduce((total, preço) => total + preço, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
            </Total>
            <Btt onClick={this.limpacarrinho}>
              <IMGBtTrash src={Limpar} alt="Limpar" />
            </Btt>
          </Result>
        </BoxResult>
      </BoxStore>
    );
  }
}

export default Main;