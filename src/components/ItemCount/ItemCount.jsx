import React, {useState} from 'react'

const ItemCount = ({stock, onAdd, initial}) => {
const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock){
            setCount(count + 1);
        }else{
            alert("Alcanzaste el stock máximo de éste producto")
        }   
    }

    const restar = () => {
        if (count > 1){
            setCount(count -1);
        }else{
            alert("Debes agregar al menos 1 producto")
        };
    }
return (
    <div id='button-container'>
        <button id='detail-button' onClick={restar}>-</button>
        <button id='detail-button' onClick={sumar}>+</button>
        <button id='add-button' onClick={()=> onAdd(count)}>Agregar</button>      
        <p id='products-cart'>Productos en carrito: {count}</p>
    </div>
  )
}

export default ItemCount