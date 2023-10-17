import { Box, Container } from '@mui/material'
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '100px',
        }}
      >
        <NavLink
          to="/"
          style={{ width: '100px', color: 'black', textDecoration: 'none' }}
        >
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
            onClick={handleRemove}
          >
            Clear All
          </button>
        </NavLink>

        <Box className={styles.listOfProducts}>
          {cartProducts.map((product) => (
            <Box
              key={product.id}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
                border: '1px solid #ccc',
                textAlign: 'center',
                padding: '10px',
              }}
            >
              <Box sx={{ width: '150px', height: '150px' }}>
                <img
                  src={product.img1}
                  alt={product.name}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Box>
              <Box className={styles.text}>
                <h3>{product.name}</h3>
                <h5>{product.defaultPrice * product.quantity}.00$</h5>
              </Box>
              <CloseIcon
                onClick={() => handleRemoveItem(product.id)}
                sx={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  cursor: 'pointer',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid black',
                  position: 'absolute',
                  bottom: '5px',
                  left: '10px',
                }}
              >
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
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '20px',
                    cursor: 'default',
                  }}
                >
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
                  }}
                >
                  +
                </button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={styles.totalContainer}>
        <Box className={styles.txtTotal}>
          <p>Subtotal</p>
          <p>{calculateTotalAmount()}.00$</p>
        </Box>
        <button
          style={{
            width: '150px',
            height: '40px',
            border: 'none',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '2px solid black ',
          }}
        >
          Go To Checkout
        </button>
      </Box>
    </Container>
  )
}

export default AllCartProducts
