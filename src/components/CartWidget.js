import React from 'react'
import {useContext} from 'react';
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {cart, totalProductsCart} = useContext(CartContext);


  if (cart.length === 0){
    return  <span id="cartWidget-icon" className="material-icons">shopping_cart</span>    
  }else {
    return <>
            <span id="cartWidget-icon" className="material-icons">shopping_cart</span>
            <div>{totalProductsCart()}</div>
           </>   
  } 
}

export default CartWidget