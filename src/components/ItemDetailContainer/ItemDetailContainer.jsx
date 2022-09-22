import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
//import { products } from '../mock/products';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import {getDoc, doc, collection} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    

    useEffect(() => {
      const itemCollection = collection(db, 'productos')
      const ref = doc(itemCollection, id)
      getDoc(ref)
      .then((res) =>{
        setProduct({
          id: res.id, 
          ...res.data()
        })
      })  
    }, [id])

  return (     
      <div><ItemDetail product={product} /></div>   
  );
}

export default ItemDetailContainer;

/* 
 const getProduct = new Promise((resolve, reject) =>{
        const oneProduct  = products.find((prod) => prod.id === (id));
        setTimeout(() => 
          {resolve(id ? oneProduct : products)}, 1000)
      })

      getProduct
        .then((item) => {
          setProduct(item);
        })
*/