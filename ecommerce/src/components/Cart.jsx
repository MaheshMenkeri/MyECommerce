import React, { useRef, useState, useEffect } from 'react';
import { useStateContext } from '../../context/StateContext';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from "react-router-dom";
import { urlFor } from '../../lib/client';

export const Cart = () => {
  // const [first, setfirst] = useState("");
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart ,toggleCartitemQuantityt ,onRemove} = useStateContext();
  return (
    <div className='product-container'>
      {cartItems && cartItems.map((item, index) => (
        <div className='product' key={index}>
          {/* <img src={urlFor(item?.image[0])} alt="img"  /> */}
          <div className='item-desc'>
            <div className='flex top'>
              <h5>{item?.name}</h5>
              <h4>{item?.price}</h4>
            </div>
          </div>
        </div>))}

      <div className='cart-wrapper' ref={cartRef}>
        <div className='cart-container'>
          <button type='button'
            className='cart-heading'
            onClick={() => {
              setShowCart(false)
              console.log("button clicked")
            }}
          >
            <AiOutlineLeft />
            <span className='heading'>Your Cart</span>
            <span className='cart-num-items'>({totalQuantities} items)</span>

          </button>
          {cartItems.length === 0 ? cartItems && (
            <>
              <div className='empty-cart'>
                <AiOutlineShopping size={150} />
                <h3>Your shopping cart is empty</h3>
                <Link />
                <button type='button'
                  onClick={() => setShowCart(false)}
                  className='btn'>
                  Conntinue Shopping
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='product-container'>
                {cartItems && cartItems.map((item, index) => (
                  <>
                    <div className='product' key={index}>
                      <img src={urlFor(item?.image[0])} alt="img" className='cart-product-image' />
                      <div className='item-desc'>
                        <div className='flex top'>
                          <h5>{item.name}</h5>
                          <h4>{item.price}</h4>
                        </div>
                        <div className='flex bottom'>
                          <div>
                            <p className='quantity-desc'>
                              <span className="minus" onClick={()=>{
                                toggleCartitemQuantityt(item._id,'dec')
                              }}><AiOutlineMinus /> </span>
                              <span className="num" >{item?.quantity }</span>
                              <span className="plus" onClick={()=>{
                                toggleCartitemQuantityt(item._id,'inc')
                              }}><AiOutlinePlus /> </span>
                            </p>
                          </div>
                          <button
                            type='button'
                            onClick={()=>onRemove(item)}
                            // custom_btn
                            className='remove-item'
                          >
                            <TiDeleteOutline />

                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))
                }
              </div>
              <div className='cart-bottom'>
                <div className='total'>
                  <h3>SubTotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className='btn-container'>
                  <button type='button' className='btn'>
                    Pay with Strip
                  </button>

                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Cart;
