import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
//import { products } from '../mock/products';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
      const itemCollection = collection(db, "productos");

      if (categoryName) {
      
        const filter = query(itemCollection, where("category", "==", categoryName));
        getDocs(filter).then((res) =>
        setItems(res.docs.map((product) => ({id: product.id, ...product.data() })))
        );
      
      }else{
        
        getDocs(itemCollection).then((res)=>
        setItems(res.docs.map((product) => ({id: product.id, ...product.data() })))
        );
      
      }
      
      }, [categoryName]);
      
  
      

      
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;



/* 
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
*/
