import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase/firebase";




 const ItemDetailContainer = ()=> {
 
  const { productId } = useParams();
  const [producto, setProducto] = useState({});
 
useEffect(()=>{

    const db = getFirestore();
    const itemCollection = db.collection("items");
    const miItem = itemCollection.doc(productId);

      miItem.get()
        .then((doc) => {
          console.log(doc.id)
         
          if (!doc.exists){
            console.log ("No existe este item");
            return;
          }
          setProducto({id: doc.id, ...doc.data()})
        })
        .catch((err) => {
          console.log (err);
        })

      }, [productId]);
    
  return (
    <>
    <div className="StylesItemDetailContainer"><ItemDetail producto={producto}/></div>
       
    </>
  );
  }

export default ItemDetailContainer;