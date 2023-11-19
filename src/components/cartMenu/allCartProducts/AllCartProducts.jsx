import { Container } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import styles from '../CartMenu.module.css'
import { NavLink } from 'react-router-dom'

const AllCartProducts = () => {
  const { cartProducts, removeFromCart, removeAllFromCart, updateQuantity } =
    useContext(CartContext)

  const handleRemove = () => {
    removeAllFromCart()
    //setTimeout - because default window.scrollTo(0, 0) doesn't work in Mozilla FireFox
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  //function - remove item from the cart
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId)
  }

  //function - calculate the total amount of all items in the cart
  const calculateTotalAmount = () => {
    return cartProducts.reduce(
      (total, product) => total + product.defaultPrice * product.quantity,
      0
    )
  }
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '100px',
        }}>
        <NavLink
          to="/"
          style={{ width: '100px', color: 'black', textDecoration: 'none' }}>
          <button
            style={{
              width: '100px',
              margin: '10px',
              borderRadius: '0px',
              border: '1px solid black',
              padding: '3px 0px',
              cursor: 'pointer',
              transition: '0.2s ease-in-out',
            }}
            className={styles.clearAllBtn}
            onClick={handleRemove}>
            Clear All
          </button>
        </NavLink>

        <div className={styles.listOfProducts}>
          {cartProducts.map((product) => (
            <div
              key={product.id}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
                border: '1px solid #000',
                textAlign: 'center',
                padding: '10px',
              }}>
              <div style={{ width: '150px', height: '150px' }}>
                <img
                  src={product.img1}
                  alt="product"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className={styles.text}>
                <h3>{product.name}</h3>
                <h5>{product.defaultPrice * product.quantity}.00$</h5>
              </div>
              <CloseIcon
                onClick={() => handleRemoveItem(product.id)}
                sx={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  cursor: 'pointer',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  border: '1px solid black',
                  position: 'absolute',
                  bottom: '5px',
                  left: '10px',
                }}>
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                  style={{
                    color: 'white',
                    background: 'black',
                    border: 'none',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    padding: '0px 7px',
                  }}>
                  -
                </button>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '20px',
                    cursor: 'default',
                  }}>
                  {product.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                  style={{
                    color: 'white',
                    background: 'black',
                    border: 'none',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    padding: '0px 5px',
                  }}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.totalContainer}>
        <div className={styles.txtTotal}>
          <p>Subtotal</p>
          <p>{calculateTotalAmount()}.00$</p>
        </div>
        <button
          style={{
            width: '150px',
            height: '40px',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '2px solid black ',
          }}>
          Go To Checkout
        </button>
      </div>
    </Container>
  )
}

export default AllCartProducts
