import React, { Component } from "react";
import carros from "../../dados/carros.js";
import Adicionar from "../../assets/add.svg";
import Remover from "../../assets/remove.svg";

class Main extends Component {
  state = { carros, listaDeCompras: [] };

  adicionarCarros = (crr) => {
    crr.mostrar = false;
    this.setState({
      listaDeCompras: [...this.state.listaDeCompras, crr]
    });
  };

  retirarCarros = (crr) => {
    crr.mostrar = true;
    this.setState({
      listaDeCompras: this.state.listaDeCompras.filter(
        (qualquercoisa) => crr.id !== qualquercoisa.id
      )
    });
  };

  limparCarrinho = () => {
    let mostrarTrue = this.state.carros.map((carronovo) => ({
      ...carronovo,
      mostrar: true
    }));
    this.setState({
      carros: mostrarTrue,
      listaDeCompras: []
    });
  };

  // number:transforma string em número
  //.tofixed("quantidade de 0 que vc quer") : fixa a quantidade de zero depois do "."
  //reduce :  função de somar passando o valor acumulado e o próximo item do array
  //disabled: evita adicionar mais uma mesma coisa no carrinho se baseando na condição booleana passada em cada item

  render() {
    return (
      <div>
        <div className="container-box-Carros">
          <section className="box-cart-car">
            {this.state.carros.map((item, index) => (
              <div className="cart-car" key={index}>
                <div className="titulo-butao">
                  <h2>{item.nome}</h2>
                  <button
                    onClick={() => this.adicionarCarros(item)}
                    disabled={!item.mostrar} 
                    className="btt"
                  >
                   <img className="add-img" src={Adicionar} alt="adicionar" />
                  </button>
                </div>
                <ul className="lista-car">
                  <li>Montadora: {item.montadora}</li>
                  <li>Preço: R${item.preço}</li>
                  <li>Tipo: {item.tipo}</li>
                </ul>
              </div>
            ))}
          </section>
          <section className="lista-de-compras"> 
             
            {this.state.listaDeCompras.map((ldc, index) => (
              <div className="cart-carldc" key={index}>
                <div className="titulo-butao-retirar">
                  <h2>{ldc.nome}</h2>
                  <button className="btt" onClick={() => this.retirarCarros(ldc)}>
                  <img className="add-img" src={Remover} alt="adicionar" />
                  </button>
                </div>
                <ul className="lista-ldc">
                  <li >Preço: R${ldc.preço}</li>
                  <li >Tipo: {ldc.tipo}</li>
                </ul>
              </div>
            ))}
            <div className="p-section"><p>Arraste seus carros preferidos aqui :)</p></div>   
          </section>
                  </div>
        <div className="box-total">
          <div className="total">
            <h3>Total</h3>
            <button onClick={this.limparCarrinho}>Limpar</button>
            <p>
              R$
              {this.state.listaDeCompras
                .map((ldc) => ldc.preço)
                .reduce((total, preço) => Number(total) + Number(preço), 0)
                .toFixed(3)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
