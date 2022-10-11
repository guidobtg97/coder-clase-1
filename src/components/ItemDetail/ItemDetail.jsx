import React, {useState} from 'react';
import {useContext} from 'react';
import '../ItemDetail/ItemDetail.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
const ItemDetail = ({product}) => {
  
  const [cantidad, setCantidad] = useState(0);
  const {agregarAlCarrito} = useContext(CartContext);

  const onAdd = (count) => {
    setCantidad(count);
    agregarAlCarrito(product, count); 
  };

  return (
    
    <div key={product.id} className='item-detail-padre'>
        <div className='item-img-container'>
            <img id='prod-img' src={product.img} alt=''/>
        </div>
        <div className='details-container'>
            <h4 id='caja-1'>{product.title}</h4>
            <h5 id='caja-2'>{product.price}</h5>
            <h5 id='caja-3'>Stock: {product.stock}</h5>
            <p id='caja-4'>{product.description}</p>
            <div>
            {cantidad === 0 
                 ?  
                <ItemCount  stock={product.stock} initial={1} onAdd={onAdd}/>
                 : 
                <button >    
                <Link to='/cart'>Ir al Carrito</Link>
                </button>
            }
            </div>
        </div>   
    </div>
    
  )
}

export default ItemDetail;