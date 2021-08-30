import React, { Component } from "react";
import styled from "styled-components";
import Simb from "./assets/remove.svg";
import Simb2 from "./assets/add.svg";
import Car from "./assets/car.svg"

const List = styled.div`

width: 230px;
border: solid #353839 1px;
margin: 5px;
cursor: pointer;
height: 164px;

&:hover {
  transform: scale(102%);
}

`

const Container = styled.div`
width: 100%;
display: flex;

`
const Titlecard = styled.div `
background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;


`

const Shoplist = styled.div` 
width: 950px;
    max-height: 500px;
    border: solid #5BC0DE 1px;
    overflow-y: scroll;
    padding: 1rem;
    background-image: url(${Car});
    background-size: 100%;
    background-repeat: no-repeat;
`

const Shopcar = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1420px;
padding: 1rem;

`
const Carblock = styled.div`
width: 400px;
border: solid #5BC0DE 1px;
margin: 5px;
border-radius: 4px;
display: flex;
justify-content: space-evenly;
background-color: white;




`
const Namecar = styled.div`
    border-radius:  4px 4px 0px 0px ;
    background-color: #5BC0DE;
    width: 392px;
    height: 30px;
    color: white;
    margin-bottom: -10px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    
   

`
const Valor = styled.b`

display: flex;
justify-content: flex-end;
margin-right: 22rem;



`



class App extends Component {




  state = {
    
    listcar: [],

    car: [

      {
        id: 1,
        Nome: "Jetta",
        Montadora: " Volkswagen",
        Preco: 144000,
        Tipo: "Sedan",
      },

      {
        id: 2,
        Nome: "Polo",
        Montadora: "Volkswagen",
        Preco: 70000,
        Tipo: "Hatch",
      }

      , {
        id: 3,
        Nome: "T-Cross",
        Montadora: "Volkswagen",
        Preco: 123000,
        Tipo: "SUV",
      }

      , {
        id: 4,
        Nome: "Tiguan R-line",
        Montadora: "Volkswagen",
        Preco: 146000,
        Tipo: "SUV",
      }

      , {

        id: 5,
        Nome: "Civic",
        Montadora: "Honda",
        Preco: 115000,
        Tipo: "Sedan",
      }

      , {
        id: 6,
        Nome: "Corolla",
        Montadora: "Toyota",
        Preco: 110000,
        Tipo: "Sedan",
      }

      , {
        id: 7,
        Nome: "Corolla Cross",
        Montadora: "Toyota",
        Preco: 184000,
        Tipo: "SUV",
      }

      , {
        id: 8,
        Nome: "Compass",
        Montadora: "Jeep",
        Preco: 132000,
        Tipo: "SUV",
        
      }


      , {
        id: 9,
        Nome: "Golf GTI",
        Montadora: "Volkswagen",
        Preco: 138000,
        Tipo: "Hatch",
        
      }
    ]
  }


  handleClick = (id) => {
    const { listcar, car} = this.state
    const card = car.find((item) => item.id === id)
    this.setState({
      listcar: listcar.concat(card)
    })
  }


  delete = (id) => {
    const { listcar} = this.state
    this.setState({
      listcar: listcar.filter((item) => {
        return item.id !== id;
      })
    })
   

  }

  render() {
    return (
      <div>
        <h1>Loja de Carros!</h1>
        <Container>
          <Shopcar>
            {this.state.car.map((item, index) => (
              <List key={index} >
                <Titlecard>
                 <b>{item.Nome}</b>
                <img src={Simb2} onClick={() => this.handleClick(item.id)} ></img>
                </Titlecard>
                <p> <b> Montadora: </b>     {item.Montadora} </p>
                <p> <b> Preço:     </b>  R$ {item.Preco.toLocaleString('pt-br')}     </p>
                <p> <b> Tipo:      </b>     {item.Tipo}      </p>
              </List>
            ))}
          </Shopcar>
          <Shoplist>
            {this.state.listcar.map((item) => (
              <div>
                <Namecar>
                <b>{item.Nome}</b>
                  <img src={Simb} onClick={() => this.delete(item.id)} >
                  </img>
                </Namecar>
                <Carblock>
                  <p> <b> Preço: </b> R$ {item.Preco.toLocaleString('pt-br')} </p>
                  <p> <b> Tipo:  </b>    {item.Tipo}  </p>
                </Carblock>
              </div>
            ))}
          </Shoplist>
        </Container>
        <Valor>
              TOTAL R$ {this.state.listcar.reduce((a,b) => a + b.Preco, 0).toLocaleString('pt-BR')}
        </Valor>
      </div>
    )

  }
}
export default App;