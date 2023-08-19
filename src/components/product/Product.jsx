import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import TrendingSlider from '../trendingSlider/TrendingSlider'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'

import products from '../../data/products'

import styles from './Product.module.css'

const Product = () => {
  const [notificationMessage, setNotificationMessage] = useState('') //contains a notification message that appears when an item is added to the cart
  const [notificationVisible, setNotificationVisible] = useState(false) //contains a notification message that appears when an item is added to the cart
  const { cartProducts, addToCart } = useContext(CartContext) //function - add a product to the cart

  //function - called when the "ADD TO CART" button is pressed
  const handleAddToCart = () => {
    //contains product information
    const productToAdd = {
      id: currentProduct.id,
      img1: currentProduct.img1,
      name: currentProduct.name,
      price: calcPrice(counter),
      quantity: counter,
    }

    //checking if a product with the same ID already exists in the cart
    const existingProductIndex = cartProducts.findIndex(
      (product) => product.id === currentProduct.id
    )

    if (existingProductIndex !== -1) {
      setNotificationMessage('Already in cart ')
    } else {
      //if the product is not yet in the cart, add it
      addToCart(productToAdd)
    }

    //update the notification message depending on the quantity of the item
    if (counter === 1) {
      setNotificationMessage('Product added to cart ')
    } else {
      setNotificationMessage('Products added to cart ')
    }

    //show notification
    setNotificationVisible(true)

    //hide notification after 3 seconds
    setTimeout(() => {
      setNotificationVisible(false)
    }, 3000)
  }

  const { id } = useParams() //getting the value of the "id" parameter from the URL

  const defaultProduct = products.find((product) => product.id === id) //find the product with the specified id in the products array
  const [currentProduct, setCurrentProduct] = useState(defaultProduct) //this is the currently selected product
  const [image, setImage] = useState(currentProduct.img2)
  const [counter, setCounter] = useState(1) //state that stores the current number of products

  //changeImage is a function called when hovering over small product images!
  const changeImage = (e) => {
    setImage(e.target.src)
  }

  //watches for changes to the id and defaultProduct parameters. If the id changes, then the currentProduct is updated according to the new id
  useEffect(() => {
    if (id) {
      //find the product with the specified id in the products array
      const product = products.find((product) => product.id === id)
      if (product) {
        setCurrentProduct(product)
      } else {
        setCurrentProduct(defaultProduct) //if the product with the specified id is not found, we use the default product
      }
    } else {
      setCurrentProduct(defaultProduct) //if the "id" parameter is not specified in the URL, we use the default product
    }
  }, [id, defaultProduct])

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

  //calculates the total cost of products
  const calcPrice = (count) => {
    return count * currentProduct.price
  }

  return (
    <div className={styles.productMainContainer}>
      <h2>{currentProduct.name}</h2>
      <div className={styles.productDiv}>
        <div className={styles.productLeft}>
          <div className={styles.bigImg}>
            <img src={image} alt="product" />
          </div>
          <div className={styles.smallImgs}>
            <div className={styles.imgsSmallBlock}>
              <img
                onMouseOver={changeImage}
                src={currentProduct.img2}
                alt="product"
              />
            </div>
            <div className={styles.imgsSmallBlock}>
              <img
                onMouseOver={changeImage}
                src={currentProduct.img3}
                alt="product"
              />
            </div>
            <div className={styles.imgsSmallBlock}>
              <img
                onMouseOver={changeImage}
                src={currentProduct.img4}
                alt="product"
              />
            </div>
          </div>
        </div>

        <div className={styles.productRight}>
          <div className={styles.productText}>
            <p>{currentProduct.description}</p>
          </div>
          <div className={styles.infoContainer}>
            <h3>Quantity</h3>
            <div className={styles.counterContainer}>
              <button className={styles.controlBtn} onClick={decrease}>
                -
              </button>
              <span className={styles.counterOutput}>{counter}</span>
              <button className={styles.controlBtn} onClick={increase}>
                +
              </button>
            </div>
            <h3>{calcPrice(counter)}.00$</h3>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button className={styles.buyBtn}>BUY NOW</button>
          </div>
        </div>
      </div>
      {/* Notification message */}
      <div
        className={`${styles.notification} ${
          notificationVisible
            ? styles.notificationShow
            : styles.notificationHide
        }`}>
        <p>
          {notificationMessage}
          <DoneOutlineIcon sx={{ color: 'green' }} />
        </p>
      </div>
      <TrendingSlider />
    </div>
  )
}

export default Product
