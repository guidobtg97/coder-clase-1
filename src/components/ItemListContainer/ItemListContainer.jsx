import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { products } from '../mock/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {

     
        const getProducts = () => 
          new Promise((response, reject) =>{
          const productosFiltrados = products.filter(
            (prod) => prod.category === categoryName
          );
          setTimeout(() => 
            response(categoryName ? productosFiltrados : products), 500);
        });
  
        getProducts()
          .then((data) => {
            setItems(data);
          })
  
          .catch((error) =>{
            //console.error(error);
          })
        
      }, [categoryName]);
  
      

      
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;