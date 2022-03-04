import React, { useEffect} from 'react';
import carrito from "./carrito.png";
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { useState } from 'react';



const CartWidget = () => {
    const {totalCantidad} = useContext (cartContext);

    const [cant, setCant] = useState ();
  
    useEffect (() => {
      setCant (totalCantidad())
    },[totalCantidad]);


    return (
        <div>
            <img src= {carrito} alt="carrito" width={"25px"}/>
            {cant}
        </div>
    )

}

export default CartWidget;