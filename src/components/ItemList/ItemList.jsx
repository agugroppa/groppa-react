import React from "react";
import Items from "../Items/Items";




const ItemList = ({itemList})=>{

    return (
        <>
        <div >
            {
                (itemList.length > 0) ? 
               <> 
                {itemList.map ((item) => {
                    return <Items key={item.id} item={item}/>;
                })}
                </>    
                :
                <>
                Cargando...
                </>

            }
        </div>
        </>
    )

}

export default ItemList