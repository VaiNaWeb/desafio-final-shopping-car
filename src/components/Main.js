import React from 'react';
import styled from 'styled-components';
import cars from '../data/carros';
import Card from './Card';
import CartItems from './CartItems'
import carImg from '../assets/car.svg'
import { render } from '@testing-library/react';


const MainContender = styled.main `
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const LeftContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const RightContainer = styled.div `
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

const ImgText = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Cart = styled.div `
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: auto;
    width: 80%;
    border: solid 1px #E6E6E6;
    overflow: auto;
`

const Total = styled.div `
    width: 80%;
    display: flex;
    justify-content: space-between;
`

const TotalText = styled.p ``

class Main extends React.Component {

    state = {
        carros: JSON.parse(localStorage.getItem('allCars')) || cars,
        carrosCart: JSON.parse(localStorage.getItem('carrosCart')) || [] ,
        draggedCar: [] ,
        total:[] ,
    }

    componentDidMount(){
        const total =JSON.parse(localStorage.getItem('carrosCart'))
        this.setState({
            total: total.reduce((a,b) => a + b.preco, 0)
        })
    }

   componentDidUpdate(_, prevState) {
    const {carros, carrosCart} = this.state;
       
       if(prevState.carros !== carros || prevState.carrosCart !== carrosCart){

        localStorage.setItem('carrosCart', JSON.stringify(this.state.carrosCart));
        localStorage.setItem('allCars', JSON.stringify(this.state.carros));
        this.setState({
            total: carrosCart.reduce((a,b) => a + b.preco, 0)
             
        })
       }
   }

    handleClickAdd =  (item) => {
        const {carros, carrosCart} = this.state
       if(item.active){
        this.setState({
            carrosCart: [...carrosCart, item]
        })
        const handleActive = carros.map(carro => {
            if(carro.id === item.id){
                return {...carro, active: false}
            } else {
                return carro
            }
        });

        this.setState({
            carros: handleActive
        })
       }

    }

    handleClickRemove = (item) => {
        const {carros, carrosCart} = this.state
        const updatedList = carrosCart.filter(carro => (
            carro.id !== item.id
        ))
        this.setState({
            carrosCart: updatedList
        });
        const handleActive = carros.map(carro => {
            if(carro.id === item.id){
                return {...carro, active: true}
            } else {
                return carro
            }
        });

        this.setState({
            carros: handleActive
        })

        if(carrosCart.length === 1){
            localStorage.removeItem('allCars');
            localStorage.removeItem('carrosCart');
        }

    }

    handleRemoveAll = () => {
        this.setState({
            carrosCart: [],
            carros: cars
        })

        localStorage.clear()
    }

    handleDragStart = (item) => {
        const {carros} = this.state
        const isActive = carros.filter(carro => carro.id === item.id)
        
        if(item.id !== isActive.id){
            this.setState({
                draggedCar: item
            })
        }
    }

    handleDrop = (item) => {
        const {carrosCart, draggedCar} = this.state
        const ids = carrosCart.map(carro => carro.id)

        if(!ids.includes(draggedCar.id)){
            this.handleClickAdd(item)
        }
    }

    render(){
       
        return(
            <MainContender>
                <LeftContainer>
                    {this.state.carros?.map((carro, index) => (
                        <Card 
                        carName={carro.nome} 
                        assembler={carro.montadora} 
                        price={carro.preco} 
                        sort={carro.tipo}
                        active={carro.active}
                        click={() => this.handleClickAdd(carro)}
                        drag={() => this.handleDragStart(carro)}
                        />
                    ))}
                </LeftContainer>
                <RightContainer>
                    <Cart onDragOver={ e => e.preventDefault()} onDrop={() => this.handleDrop(this.state.draggedCar)} >
                        {
                            this.state.carrosCart.length < 1 ? <ImgText><img 
                            src={carImg} 
                            style={{'width': '70%'} } 
                            alt='imagem de um carro preto' 
                            /> 
                            <p>Arraste seus carros preferidos aqui :)</p>
                            </ImgText>
                            : this.state.carrosCart.map((carro, index) => (
                                <CartItems 
                                carName= {carro.nome}
                                price={carro.preco}
                                sort={carro.tipo}
                                click={() => this.handleClickRemove(carro)}
                                
                                />
                            ))
                        }
                    </Cart>
                    <Total>
                        <TotalText>Total</TotalText>
                        <TotalText>R$ {this.state.carrosCart.length > 0? this.state.total + '.000' : 0} </TotalText>
                    </Total>
                    <button onClick={this.handleRemoveAll} >Limpar</button>
                </RightContainer>
            </MainContender>
        )
    }
}

export default Main;