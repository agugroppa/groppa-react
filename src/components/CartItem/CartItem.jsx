import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';

const CartItem = ({ prod }) => {

    const { deleteItem } = useContext(cartContext);

    return (

        <div>
            <h3>{prod.item.nombre}</h3>
            <p>Cantidad: {prod.count}</p>
            <img src={prod.item.pictureUrl} alt="" width={"25%"} />
            <div>$ {prod.item.precio * prod.count}</div>
            <button onClick={() => deleteItem(prod.item.id)}>Eliminar</button>
            <br />
            <br />
        </div>

    );
};

export default CartItem;
