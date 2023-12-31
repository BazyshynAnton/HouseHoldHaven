import React, { createContext, useState } from 'react'

//CONTEXT - implements a cart context to manage the list of items in the cart inside components

//create a context
const CartContext = createContext()

//provider component that provides access to the state of the cart and functions for managing it
const CartProvider = ({ children }) => {
  //cart status, list of products in the cart
  const [cartProducts, setCartProducts] = useState([])

  //function - add product to cart
  const addToCart = (product) => {
    setCartProducts((prevProducts) => [...prevProducts, product])
  }

  //function - remove an item from the cart by ID
  const removeFromCart = (itemId) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== itemId)
    )
  }
  const removeAllFromCart = () => {
    setCartProducts([])
  }

  //function - update the quantity of products in the cart
  const updateQuantity = (productId, newQuantity) => {
    //limit the new number from 1 to 10
    const limitedQuantity = Math.min(Math.max(newQuantity, 1), 10)

    //update the state of the cart, updating the quantity of the product by ID
    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: limitedQuantity }
          : product
      )
    )
  }

  const [counter, setCounter] = useState(1) //state that stores the current number of products

  //increase counter
  const increase = () => {
    if (counter < 10) {
      setCounter((count) => count + 1)
    }
  }

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1)
    }
  }

  //exposing the cart state and (control functions) to the context!!
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        updateQuantity,
        counter,
        setCounter,
        increase,
        decrease,
      }}
    >
      {/* Render the child components that will have access to the context */}
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
