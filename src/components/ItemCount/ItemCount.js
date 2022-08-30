import React, {useState} from 'react'

const ItemCount = (props) => {

   

   const [count, setCount] = useState(props.initial);



    const sumar = () => {
        if (count < props.stock){
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
    };

    const onAdd = () =>{
        if (count > props.stock){
            alert("No hay stock suficente de este producto")
        }else{
            alert("Agregaste " + count + " productos al carrito" )
        }
        
    }

  return (
    <div>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <buton onClick={onAdd}>Agregar</buton>      
        <p>Productos en carrito: {count}</p>
    </div>
  )
}

export default ItemCount