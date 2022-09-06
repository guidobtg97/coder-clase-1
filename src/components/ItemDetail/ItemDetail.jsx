import React from 'react'

const ItemDetail = ({product}) => {
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
        </div>   
    </div>
    
  )
}

export default ItemDetail;