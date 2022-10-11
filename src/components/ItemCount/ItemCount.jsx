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
    <div>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <button onClick={()=> onAdd(count)}>Agregar</button>      
        <p>Productos en carrito: {count}</p>
    </div>
  )
}

export default ItemCount