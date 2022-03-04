import React from 'react';
import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from "react-router-dom";



const NavBar = () => {
 
    return (
      <div className="navbar">
        <NavLink to="/">
          <h1 className= "baraName">BARA SUSHI</h1>
        </NavLink>
        <ul className="navLinks">
          <li>
            <NavLink
              to="/category/ensaladas"
              className="navLink"
              activeClassName="currentCategory"
            >
              ENSALADAS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/combinados-de-sushi"
              className="navLink"
              activeClassName="currentCategory"
            >
              COMBINADOS DE SUSHI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/otros-platos"
              className="navLink"
              activeClassName="currentCategory"
            >
              OTROS PLATOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navLink"
              activeClassName="currentCategory"
            >
              <CartWidget/>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;
