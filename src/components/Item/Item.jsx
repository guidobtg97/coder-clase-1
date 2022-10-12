import React from 'react'
import { Link } from 'react-router-dom';
import '../Item/Item.css';

const Item = (items) => {
  return (
    <Link to={`/detail/${items.id}`}>
        
      <div key={items.id} className='item-detail-padre'>
        <div className='products-container'>
        <div className='item-img-container' id='img-container'>
            <img id='prod-img' src={items.img} alt=''/>
        </div>

        <div className='details-container'>
            <h4 id="caja-1">{items.title}</h4>
            <h5 id="caja-2">{items.price}</h5>
            <Link to={`/detail/${items.id}`}>
              <button id='item-button'>Ver detalles</button>
            </Link>
        </div>
        </div>
      </div>

    </Link>
  )
}

export default Item;