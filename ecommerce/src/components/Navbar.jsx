import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping} from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import {Cart} from './Cart';

const Navbar = () => {
  const {showCart, setShowCart,totalQuantities } = useStateContext();
  console.log("this is navbar page")
  return (
    <div className='navbar-container'>
      
      <p className='logo'>  
        <Link to="/">Jsm Headphones</Link>

      </p>
      <button type='button' className='cart-icon' onClick={()=> {
        setShowCart(true)
      console.log("clicked in navabar")
      }}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

        { showCart && <Cart />}
        {/* <Cart /> */}
      
      
    </div>
  )
}

export default Navbar   
