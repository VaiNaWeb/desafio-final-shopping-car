import React from "react";
import car from "./components/cars";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Add from "./assets/add.svg";
import Remove from "./assets/remove.svg";
import Carrinho from "./assets/car.svg";
import Font from "./components/Fonts";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const DivTitleLoja = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 26px;
    font-family: ${Font};
  }
`;

const Container = styled.div`
  display: flex;
`;
const BoxCar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;
const Card = styled.div`
  border: solid 1px #dcdcdc;
  height: 20vh;
  margin-left: 1rem;
  width: 21%;
  cursor: move;
  opacity: ${(props) => (props.isative === true ? 1 : 0.5)};

  &:hover {
    border: solid 1px #5bc0de;
  }
`;
const ListCompras = styled.div`
  height: 90vh;
  width: 40%;
`;
const List = styled.div`
  border: solid 1px #dcdcdc;
  height: 90%;
  width: 80%;
  overflow: auto;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    margin-right: 7rem;
  }
`;
const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px #cfcfcf;
  background-color: #e8e8e8;
  &:hover {
    color: white;
    background-color: #5bc0de;
    border: solid 1px #5bc0de;
  }
  h3 {
    font-size: 17px;
    margin-left: 5%;
    margin-top: 1%;
  }
`;

const DivButtonRemove = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #5bc0de;

  h3 {
    color: white;
    margin-left: 2rem;
  }
`;

const DivFinish = styled.div`
  border: solid 1px #5bc0de;
  width: 90%;
  margin-left: 1.3rem;
  margin-top: 1rem;
`;

const CarroImg = styled.img`
  margin-top: 7rem;
  width: 45%;
`;

const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 17px;
  }
`;

const ImgButtons = styled.img`
  cursor: pointer;
  width: 20px;
  margin-right: 3%;
`;
const ButtonDeleteTudo = styled.div`
  margin-left: 30%;
  margin-top: -5rem;
`;
const ButtonTudo = styled.button`
  background-color: #5bc0de;
  border: solid 2px black;
  width: 20%;
  height: 3rem;
`;
const H1Total = styled.h1``;

const DivParagrafs = styled.div`
  p {
    text-align: center;
    margin-bottom: 8%;
    margin-top: 4%;
  }
`;
const DivParagrafsFim = styled.div`
  display: flex;
  height: 2.4rem;

  p {
    margin-left: 4.3rem;
    margin-top: 0.5rem;
  }
`;

const BoxTudo = styled.section``;
class App extends React.Component {
  state = {
    carros: car,
    finishList: [],
    valorTotal: [],
    arrast: {}
  };

  handleClickAdd = (x) => {
    if (x.ativado === true) {
      this.setState({
        finishList: this.state.finishList.concat(x),
        valorTotal: this.state.valorTotal.concat(x.preco)
      });
      x.ativado = false;
    }
  };

  handleClickRemove = (x) => {
    this.setState({
      valorTotal: this.state.valorTotal.concat(-x.preco),
      finishList: this.state.finishList.filter(
        (item) => item.number !== x.number
      )
    });
    x.ativado = true;
  };

  handleClickDeleteTudo = () => {
    this.setState({
      finishList: [],
      valorTotal: [],
      carros: this.state.carros.map((item) => ({
        ...item,
        ativado: true
      }))
    });
  };
  handleDragStart = (x) => {
    this.setState({
      arrast: x
    });
    console.log(this.state.arrast);
  };
  render() {
    return (
      <BoxTudo>
        <GlobalStyle />

        <DivTitleLoja>
          <h1>Lojas de carros!</h1>
        </DivTitleLoja>

        <Container>
          <BoxCar>
            {this.state.carros.map((item) => (
              <Card
                onDragStart={() => this.handleDragStart(item)}
                draggable="true"
                isative={item.ativado}
              >
                <DivButton>
                  <h3>{item.nome}</h3>
                  <ImgButtons
                    src={Add}
                    alt="botao de add"
                    onClick={() => this.handleClickAdd(item)}
                  />
                </DivButton>
                <DivParagrafs>
                  <p>
                    <b>Montadora:</b>
                    {item.montadora}
                  </p>
                  <p>
                    <b>Preço:</b>
                    {item.preco}.000
                  </p>
                  <p>
                    <b>Tipo:</b>
                    {item.tipo}
                  </p>
                </DivParagrafs>
              </Card>
            ))}
          </BoxCar>

          <ListCompras>
            <List
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => this.handleClickAdd(this.state.arrast)}
            >
              {this.state.finishList.length < 1 ? (
                <BoxImg>
                  <CarroImg src={Carrinho} alt="imagem de um carrinho" />
                  <h2>Arraste seus carros preferidos aqui :) </h2>
                </BoxImg>
              ) : (
                this.state.finishList.map((item) => (
                  <DivFinish>
                    <DivButtonRemove>
                      <h3>{item.nome}</h3>
                      <ImgButtons
                        src={Remove}
                        alt="botao de remover"
                        onClick={() => this.handleClickRemove(item)}
                      />
                    </DivButtonRemove>

                    <DivParagrafsFim>
                      <p>
                        <b>Tipo:</b>
                        {item.tipo}
                      </p>

                      <p>
                        <b>Preço:</b>
                        {item.preco}.000
                      </p>
                    </DivParagrafsFim>
                  </DivFinish>
                ))
              )}
            </List>

            <Total>
              <H1Total>Total </H1Total>
              <h1>
                R$
                {this.state.valorTotal.reduce(
                  (valorAcumulado, valorAtual) => valorAcumulado + valorAtual,
                  0
                )}
                .000
              </h1>
            </Total>
          </ListCompras>
        </Container>

        <ButtonDeleteTudo>
          <ButtonTudo onClick={this.handleClickDeleteTudo}>
            Limpe toda a sua lista de compras
          </ButtonTudo>
        </ButtonDeleteTudo>
      </BoxTudo>
    );
  }
}

export default App;
