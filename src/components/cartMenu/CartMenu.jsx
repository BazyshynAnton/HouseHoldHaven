import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CloseIcon from '@mui/icons-material/Close'
import shoppingEmptyCart from '../../images/shoppingEmptyCart.jpg'

import styles from './CartMenu.module.css'
import { NavLink } from 'react-router-dom'

/* 
  -access to context
  -is menu open?
  -handleCloseCartMenu - function to close the menu
  -Use useContext to get the values ​​and functions from the CartContext such as cartProducts, removeFromCart and updateQuantity
*/
const CartMenu = ({ isOpen, handleCloseCartMenu }) => {
  const { cartProducts, removeFromCart, updateQuantity } =
    useContext(CartContext)

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
    //Style classes from CartMenu.module.css are added depending on the value of isOpen
    <div
      className={`${styles.cartMenu} ${isOpen ? styles.cartMenuOpened : ''}`}>
      <div className={styles.txtContainer}>
        <h3>Your Shopping Cart({cartProducts.length})</h3>
        <CloseIcon
          sx={{ fontSize: '1.8rem', cursor: 'pointer' }}
          onClick={handleCloseCartMenu}
        />
      </div>

      {
        //-check to see if there are items in shopping cart
      }
      {!cartProducts.length && (
        <div className={styles.emptyContainer}>
          <div className={styles.imgInCart}>
            <img src={shoppingEmptyCart} alt="keep browsing" />
          </div>
          <p>Your cart is empty.</p>
          <button onClick={handleCloseCartMenu}>Keep Browsing</button>
        </div>
      )}
      {
        //-check to see if there are items in shopping cart
      }
      {!!cartProducts.length && (
        <div
          style={{
            height: '100%',
            padding: '0.2rem',
            marginTop: '50px',
            background: 'white',
          }}>
          <div className={styles.fullProductBox}>
            <div className={styles.fullProduct}>
              {cartProducts.slice(0, 2).map((product) => (
                <div className={styles.cartProduct} key={product.id}>
                  <div className={styles.leftImg}>
                    <img src={product.img1} alt="product" />
                  </div>
                  <div className={styles.cartInfoMiddle}>
                    <p>{product.name}</p>

                    <div
                      style={{ display: 'flex', border: '1px solid black' }}
                      className={styles.cartBtns}>
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
                        }}>
                        -
                      </button>
                      <span
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '30px',
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
                        }}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.rightInfo}>
                    <p>{product.defaultPrice * product.quantity}.00$</p>
                    <CloseIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleRemoveItem(product.id)}
                    />
                  </div>
                </div>
              ))}

              {cartProducts.length > 2 && (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}>
                  <NavLink
                    to="/cart"
                    onClick={() => {
                      window.scrollTo(0, 0)
                      handleCloseCartMenu()
                    }}>
                    <button
                      style={{
                        padding: '4px',
                        border: '1px solid grey',
                        cursor: 'pointer',
                      }}>
                      SHOW MORE({cartProducts.length - 2})
                    </button>
                  </NavLink>
                </div>
              )}
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
        </div>
      )}
    </div>
  )
}

export default CartMenu
