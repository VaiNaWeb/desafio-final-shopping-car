import React, { Component } from "react";
import "./index.css";
import styled from "styled-components";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg"
import car from "./assets/car.svg"


const Mom = styled.div `
  width: 100%;
  height: 80vw;
  display: flex;
  justify-content: space-evenly;
`

const Grade = styled.div `
  width: 70%;
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 190px;
  height: 170px;
  border: 2px solid gray;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 15px;
  margin: 15px;

  &:hover{
    color: blue;
  }
` 
const Model = styled.div `
  display: flex;
  width: 190px;
  height: 25px;
  justify-content: space-between;
  background-color: #DADFEA;
  border-bottom: 1px solid gray;
`
const ModelDois = styled.div `
  display: flex;
  width: 25vw;
  height: 25px;
  justify-content: space-between;
  background-color: #DADFEA;
  border-bottom: 1px solid gray;
`
const Title = styled.h1 `
  text-align: center;
`
const Any = styled.div `
  width: 25vw;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid gray;
  border-radius: 8px;
  background-color: #ECECEC;
  margin: 1rem;
  &:hover{
    color: blue;
  }


`
const List = styled.div `
  width: 30vw;
  height: 50vw;
  flex-direction: column;
  background-image: url(${car});
  background-repeat: no-repeat;
  border: 2px solid gray;
`

class App extends Component {
  state = {
    toBuy: [
      {
        modelo: "Jetta",
        montadora: "Volkswagen",
        preço: 144000,
        tipo: "Sedan",
        id: 1
      },
      {
        modelo: "Polo",
        montadora: "Volkswagen",
        preço: 70000,
        tipo: "Hatch",
        id: 2
      },
      {
        modelo: "T-Cross",
        montadora: "Volkswagen",
        preço: 123000,
        tipo: "SUV",
        id: 3
      },
      {
        modelo: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146000,
        tipo: "SUV",
        id: 4
      },
      {
        modelo: "Civic",
        montadora: "Honda",
        preço: 146000,
        tipo: "SUV",
        id: 5
      },
      {
        modelo: "Corolla",
        montadora: "Toyota",
        preço: 110000,
        tipo: "Sedan",
        id: 6
      },
      {
        modelo: "Corolla Cross",
        montadora: "Toyota",
        preço: 184000,
        tipo: "SUV",
        id: 7
      },
      {
        modelo: "Compass",
        montadora: "Jeep",
        preço: 132000,
        tipo: "SUV",
        id: 8
      },
      {
        modelo: "Golf F TI",
        montadora: "Volkswagen",
        preço: 138000,
        tipo: "Hatch",
        id: 9
      }
    ],
    chart: [],
    total: ""
  };

  handleAdd = (id) => {
    const Chart = this.state.chart
    const Carros = this.state.toBuy.find((item) => item.id === id);
   this.setState({
     chart: this.state.chart.concat(Carros),
     total: this.state.total.concat(Chart)
   } 

   );
   console.log("oi");
   console.log(this.state);
 };

 handleRemove = (id) => {
   this.setState({
     chart: this.state.chart.filter((item) => {
       return item.id !== id;
     })
   });
 };

 removeAll = () => {
   this.setState({
     chart: []
   })
 }

 render() {
   return (
     <div>
       <Title>Loja de Carros!</Title>
      <Mom>
       <Grade>
         {this.state.toBuy.map((item, index) => (
           <Card key={index}>
             <Model>
             {item.modelo}
             <img src={add} onClick={() => this.handleAdd(item.id)} />
             </Model>
             <p>Montadora: {item.montadora}</p>
             <p>Preço: {item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })}</p>
             <p>Tipo: {item.tipo}</p>
           </Card>
         ))}
       </Grade>
       <List>
         {this.state.chart.map((item, index) => (
           <Any key={index}>
               <ModelDois>
               {item.modelo}
               <img onClick={() => {this.handleRemove(item.id);}} src={remove} />
               </ModelDois>
               <p>Tipo: {item.tipo}</p>
               <p>Preço: {item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })}</p>
           </Any>
         ))}
             <h4>Total: {this.state.chart.reduce((a, c) => a + c.preço, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })}</h4>
             <button onClick={this.removeAll}>Limpar</button>
       </List>
       </Mom>
     </div>
   );
 }
}


export default App;
