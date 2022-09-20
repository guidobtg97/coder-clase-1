import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {

  const {cart, clearCart, removeProduct, totalPrice} = useContext(CartContext);

  console.log(cart);

  if (cart.length === 0) {
    return <>
              <h3>¡Vaya! El carrito está vacio, deberías agregar algo.</h3>
              <button >    
                  <Link to='/'>Ir a la tienda</Link>
              </button>
          </>
  }else {
    return (
      <div>
        {
          cart.map((prod) => (
            <div key={prod.id}>
              <div><img src={prod.img} alt='img-cart'/></div>
              <h3>{prod.title}</h3>
              <h3>Precio: {prod.price} ({prod.price * prod.count})</h3>
              <h3>Cantidad: {prod.count}</h3>
              <button onClick={()=>removeProduct(prod.id)}>Eliminar</button>
              
            </div>
          ))}
        <button onClick={clearCart}>Clear Cart</button>
        <div>Total: ${totalPrice()}</div>
      </div>
    )
  }


  
}

export default Cart