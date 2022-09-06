import React from 'react'
import '../ItemDetail/ItemDetail.css'

const Item = (items) => {
  return (
    <div key={items.id}>
        <p>{items.title}</p>
        <h5>{items.price}</h5>
        <div>
          <img src={items.img} alt=''/>
        </div>
    </div>
  )
}

export default Item;