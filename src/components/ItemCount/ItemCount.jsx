import React, {useState} from 'react';
import {Button} from 'react-bootstrap';



const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (initial);

    return(
        <>
      <div style={{ width: "200px" }}>
        <div className="d-flex flex-row justify-content-between">
          <Button
            disabled={count <= 1}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
          
          <div>{count}</div>
          
          <Button
            disabled={count >= stock}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
        </div>
        
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" onClick={() => onAdd(count)}>
            Agregar al carrito
          </Button>
        </div>
      
      </div>
    </>
    )
}

export default ItemCount;