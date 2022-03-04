import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import Form from '../Form/Form';
import './Cart.css';

const Cart = () => {

  const { cart, clearCart, precioTotal } = useContext(cartContext);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(precioTotal())
  }, [precioTotal]);

  return (
    <>
      <div className='cartBcGr'>
        {cart.length === 0 ?
          <div className='emptyCart'>
            <h4 className='empty'>Tu carrito esta vacio</h4>
            <Link to='/'><button className='buttonHome'>Vuelve a la tienda!!</button></Link>
          </div>
          :
          <div className='itemsInCart'>
            {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
            <p className='totalPrice'>Total a pagar: $ {total}</p>
            <button onClick={() => clearCart()} className='emptyButton'>Vaciar carrito</button>
            <Form />
          </div>

        }
      </div>

    </>
  )
}

export default Cart