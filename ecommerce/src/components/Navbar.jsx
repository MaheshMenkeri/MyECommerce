import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import { Cart } from './Cart';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <header className="navbar-container">
      <Link to="/" className="logo"><span className="logo-mark">J</span> JSM<span className="logo-light"> AUDIO</span></Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <a href="/#products">Shop</a>
        <a href="/#products">Collections</a>
      </nav>
      <button type="button" className="cart-icon" aria-label={`Open cart, ${totalQuantities} items`} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </header>
  );
};

export default Navbar;
