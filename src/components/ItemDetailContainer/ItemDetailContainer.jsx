import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
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
