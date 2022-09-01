import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { products } from '../mock/products';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
      const getProducts = new Promise((response, reject) =>{
        setTimeout(() => 
          response(products), 3000);
      });

      getProducts
        .then((products) => {
          setItems(products);
        })

        .catch((error) =>{
          //console.error(error);
        })

    }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;