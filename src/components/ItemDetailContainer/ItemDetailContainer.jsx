import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../mock/products';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
      const getProduct = new Promise((resolve, reject) =>{
        const ItemDetailTester  = products.find((product) => product.id === 2);
        setTimeout(() => 
          resolve(ItemDetailTester), 2000);
      })

      getProduct
        .then((item) => {
          setProduct(item);
        })
    }, [])

  return (     
      <div><ItemDetail product={product} /></div>   
  );
}

export default ItemDetailContainer;