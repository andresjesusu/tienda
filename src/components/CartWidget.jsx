import React, { useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { CartContext, CartProvider } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';



const CartWidget = () => {
  const {items} = useContext(CartContext);
  const [cantidadItems, setCantidadItems] = useState();

  const navigate = useNavigate()
  const goToCart = () => {
      navigate(`/Cart/`)
  }

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.qty;
    });
    setCantidadItems(total);
  }, [items]);

    return (
      <div>
      {cantidadItems >= 0 ? (

    <div onClick={goToCart} variant="secondary" id='pay' className='App' 
    style={{fontSize:"1em", color: 'white', 
    marginLeft:"200px"}}>
      <FontAwesomeIcon icon={faCartShopping}/> 
      {cantidadItems}
      </div>
   ) : null}
      </div>
      
    );
}

export default CartWidget;
