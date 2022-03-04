import React from "react";
import './Items.css';
import { Link } from "react-router-dom";


const Items = ({ item }) => {
    return (
        <>
            <Link to={"/product/" + item.id}>
                <div className="item-card">
                    <div className="item-header"><u>{item.nombre}</u></div>
                    <div className="item-img">
                        <img className="img img-fluid" src={item.pictureUrl} alt="" width={"25%"} />
                    </div>
                    <div className="item-description">{item.descripcion}</div>
                    <div className="item-price"> {item.precio}</div>

                </div>
            </Link>

        </>
    );
}

export default Items;


