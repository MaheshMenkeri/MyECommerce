import React, { createContext, useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
const Context = createContext();

export const StateContext = ({ children }) => {
  console.log("children==",children);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;
  const notify = () => toast.success("Added successfully!");

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty <= 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    debugger;
    const checkProductInCart = cartItems.find((item) => item.id === product._id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevQuantity) => prevQuantity + quantity)
    if (checkProductInCart) {
      const updatedCartItem = cartItems.map((cartProduct) => {
        if (cartProduct.id == product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }

        }
      })
      setCartItems(updatedCartItem);

    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }])
    }
    notify();
    // toast.success('Added successfully!');
    console.log("added successfully///")

  }

  const onRemove=(product)=>{
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newcartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalqty)=>{prevTotalqty - foundProduct.quantity })
    setCartItems(newcartItems);
  }

  const toggleCartitemQuantityt = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newcartItems = cartItems.filter((item) => item._id !== id)

    if (value == 'inc') {

      setCartItems([...newcartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQantities) => prevTotalQantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {

        setCartItems([...newcartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQantities) => prevTotalQantities - 1);
      }

    }

  }

  const value = {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    qty,
    incQty,
    decQty,
    onAdd,
    toggleCartitemQuantityt,
    onRemove
  };


 

  return (
    <Context.Provider value={value}>
      {children}
      <Toaster />
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
