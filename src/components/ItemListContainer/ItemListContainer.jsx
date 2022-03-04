import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase/firebase";



const ItemListContainer = ({ greeting }) => {

    const [itemList, setItemList] = useState([]);
    const { categoryId } = useParams({});

      useEffect(() => {

        const db = getFirestore();
        
    
        let itemCollection = categoryId
        ? db.collection('items').where('category', '==', categoryId)
        : db.collection('items')

           itemCollection.get()
          .then((querySnapShot) => {
    
            if (querySnapShot.size === 0) {
              console.log('no hay documentos con en ese query');
              return
            }
    
            console.log('hay documentos');
    
            setItemList(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));
            
          })
          .catch((err)=>{
            console.log(err);
          })
      }, [categoryId])  
    
   
    return (

        <>
            <div className="greetingStyles">
                <h1>{greeting}</h1>
            </div>
            <ItemList itemList={itemList} className='stylesItems'/>

        </>
    );
}


export default ItemListContainer;