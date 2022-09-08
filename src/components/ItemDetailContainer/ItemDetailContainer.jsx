import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../mock/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    

    useEffect(() => {
      const getProduct = new Promise((resolve, reject) =>{
        const oneProduct  = products.find((prod) => prod.id === Number(id));
        setTimeout(() => 
          {resolve(id ? oneProduct : products)}, 1000)
      })

      getProduct
        .then((item) => {
          setProduct(item);
        })
    }, [id])

  return (     
      <div><ItemDetail product={product} /></div>   
  );
}

export default ItemDetailContainer;