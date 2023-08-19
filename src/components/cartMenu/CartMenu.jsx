import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import CloseIcon from '@mui/icons-material/Close'
import shoppingEmptyCart from '../../images/shoppingEmptyCart.jpg'

import styles from './CartMenu.module.css'

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
      (total, product) => total + product.price * product.quantity,
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
        <div className={styles.productContainer}>
          <div className={styles.fullProductDiv}>
            <div className={styles.fullProduct}>
              {cartProducts.map((product) => (
                <div className={styles.cartProduct} key={product.id}>
                  <div className={styles.leftImg}>
                    <img src={product.img1} />
                  </div>
                  <div className={styles.cartInfoMiddle}>
                    <p>{product.name}</p>

                    <div className={styles.cartBtns}>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, product.quantity - 1)
                        }>
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }>
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.rightInfo}>
                    <p>{product.price * product.quantity}.00$</p>
                    <CloseIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleRemoveItem(product.id)}
                    />
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
            <button>Go To Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartMenu
