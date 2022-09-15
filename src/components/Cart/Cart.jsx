import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'


const Cart = () => {

  const {cart, clearCart} = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <h2>Este es la vista de tu carrito</h2>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart