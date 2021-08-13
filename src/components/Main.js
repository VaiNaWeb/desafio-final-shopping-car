import {useState, useEffect} from 'react';
import styled from 'styled-components';
import cars from '../data/carros';
import Card from './Card';
import CartItems from './CartItems'
import carImg from '../assets/car.svg'


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

const Main = () => {
    const [carros, setCarros] = useState(JSON.parse(localStorage.getItem('allCars')) || cars);
    const [carrosCart, setCarrosCart] = useState( JSON.parse(localStorage.getItem('carrosCart')) || []);
    const [draggedCar, setDraggedCar] = useState([]);
    const [total, setTotal]= useState([])

   useEffect(() => {
    localStorage.setItem('carrosCart', JSON.stringify(carrosCart));
    localStorage.setItem('allCars', JSON.stringify(carros));
    setTotal(
        ()=> {
           const value = carrosCart.map((carro) => (
                carro.preco
           ));
           return value.reduce((a, b) => a + b, 0)
        }
    )
   }, [carrosCart, carros])

    const handleClickAdd =  (item) => {
       if(item.active){
        setCarrosCart([...carrosCart, item]);
        const handleActive = carros.map(carro => {
            if(carro.id === item.id){
                return {...carro, active: false}
            } else {
                return carro
            }
        });

        setCarros(handleActive);
       }

    }

    const handleClickRemove = (item) => {
        const updatedList = carrosCart.filter(carro => (
            carro.id !== item.id
        ))
        setCarrosCart(updatedList);
        const handleActive = carros.map(carro => {
            if(carro.id === item.id){
                return {...carro, active: true}
            } else {
                return carro
            }
        });

        setCarros(handleActive);

        if(carrosCart.length === 1){
            localStorage.removeItem('allCars');
            localStorage.removeItem('carrosCart');
        }

    }

    const handleDragStart = (item) => {
        const isActive = carros.filter(carro => carro.id === item.id)
        
        if(item.id !== isActive.id){
            setDraggedCar(item)
        }
    }

    const handleDrop = (item) => {
        const ids = carrosCart.map(carro => carro.id)

        if(!ids.includes(draggedCar.id)){
            handleClickAdd(item)
        }
    }

    return(
        <MainContender>
            <LeftContainer>
                {carros?.map((carro, index) => (
                    <Card 
                    carName={carro.nome} 
                    assembler={carro.montadora} 
                    price={carro.preco} 
                    sort={carro.tipo}
                    active={carro.active}
                    click={() => handleClickAdd(carro)}
                    drag={() => handleDragStart(carro)}
                    />
                ))}
            </LeftContainer>
            <RightContainer>
                <Cart onDragOver={ e => e.preventDefault()} onDrop={() => handleDrop(draggedCar)} >
                    {
                        carrosCart.length < 1 ? <img 
                        src={carImg} 
                        style={{'width': '70%'} } 
                        alt='imagem de um carro preto' 
                        /> 
                        : carrosCart.map((carro, index) => (
                            <CartItems 
                            carName= {carro.nome}
                            price={carro.preco}
                            sort={carro.tipo}
                            click={() => handleClickRemove(carro)}
                            
                            />
                        ))
                    }
                </Cart>
                <Total>
                    <TotalText>Total</TotalText>
                    <TotalText>R$ {carrosCart.length > 0? total + '.000' : 0} </TotalText>
                </Total>
            </RightContainer>
        </MainContender>
    )
}

export default Main;