import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../../context/CartContext";
import { Button } from "bootstrap";
import './Form.css';


const Form = () => {

    const [orderId, setOrderId] = useState('');
    const { cart, precioTotal, clearCart } = useContext(cartContext);
    const [finalizarCompra, setFinalizarCompra] = useState(true);

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function graciasPorSuCompra() {
        setFinalizarCompra(false)
    };

    function handleSubmit(event) {

        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: precioTotal(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });
        //graciasPorSuCompra();
    }

    return (
        <>
            {finalizarCompra &&(  

                <form onSubmit={handleSubmit} className='formStyles' >
                    <h3>Ingresa tus datos:</h3>

                    <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" required />
                    <br />
                    <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" required />
                    <br />
                    <input type="text" name="email" ref={emailRef} placeholder="Email" required />
                    <br />
                    <input type="text" name="state" ref={stateRef} placeholder="Provincia" required />
                    <br />
                    <input type="text" name="city" ref={cityRef} placeholder="Ciudad" required />
                    <br />
                    <input type="text" name="address" ref={addressRef} placeholder="Direccion" required />
                    <br />
                    <button type="submit">Enviar pedido!</button>
                </form>
            )}
            {orderId && (     
                <div>
                    <p>Gracias por elegirnos!! {(<p>Felicitaciones tu orden es: {orderId}</p>)}</p>
                    <Link to='/'><button onClick={() => clearCart()} className= 'buttonHome'>Finalizar Compra!</button></Link>
                </div>
            )}

        </>
    );
}


export default Form

