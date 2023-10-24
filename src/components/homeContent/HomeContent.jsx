import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button, Container } from '@mui/material'
import TrendingSlider from '../trendingSlider/TrendingSlider'
import Items from '../items/Items'

import { CartContext } from '../../context/CartContext'

import products from '../../data/products'

import furniture from '../../images/furniture.png'
import skinCarePic from '../../images/skinCare.jpg'
import kitchen from '../../images/kitchen.png'
import electronics from '../../images/electronics.jpg'
import harmonius from '../../images/harmonius.jpg'
import comfortable from '../../images/comfortable.jpg'

import styles from './HomeContent.module.css'

const HomeContent = () => {
  const { setCounter } = useContext(CartContext)

  //styles for the "SHOP NOW" button
  const stylesForButton = {
    button: {
      background: 'black',
      borderRadius: 0,
      border: 'none',
      color: 'white',
      fontFamily: 'Ubuntu, sans-serif',
      marginTop: '15px',

      '&:hover': {
        background: 'rgba(0, 0, 0, 0.8)',
      },
    },
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}>
        <Box className={styles.categoriesContainer}>
          <NavLink
            to="/categories/furnitures"
            onClick={() => window.scrollTo(0, 0)}>
            <Box className={styles.furniture}>
              <img src={furniture} alt="furniture" />
              <h2>Live comfortably</h2>
            </Box>
          </NavLink>
          <NavLink
            to="/categories/skincare"
            onClick={() => window.scrollTo(0, 0)}>
            <Box className={styles.skinCare}>
              <img src={skinCarePic} alt="skincare" />
              <h2>Skincare</h2>
            </Box>
          </NavLink>

          <Box className={styles.containerTwo}>
            <NavLink
              to="/categories/kitchen"
              onClick={() => window.scrollTo(0, 0)}>
              <Box className={styles.kitchen}>
                <img src={kitchen} alt="kitchen" />
                <h2>Kitchen</h2>
              </Box>
            </NavLink>
            <NavLink
              to="/categories/electronics"
              onClick={() => window.scrollTo(0, 0)}>
              <Box className={styles.electronics}>
                <img src={electronics} alt="electronics" />
                <h2>Electronics</h2>
              </Box>
            </NavLink>
          </Box>
        </Box>

        <Box className={styles.productsContainer}>
          <h2>OUR PRODUCTS</h2>
          <hr />
          <Box className={styles.cardsContainer}>
            {/*only the first 8 products from the array are displayed*/}
            {products.slice(0, 8).map((product) => {
              return (
                <NavLink
                  key={product.id}
                  to={`/categories/product/${product.id}`}
                  onClick={() => {
                    setCounter(1)
                    //setTimeout - because default window.scrollTo(0, 0) doesn't work in Mozilla FireFox
                    setTimeout(() => {
                      window.scrollTo(0, 0)
                    }, 0)
                  }}>
                  <Items
                    key={product.id}
                    img1={product.img1}
                    name={product.name}
                    price={product.price}
                  />
                </NavLink>
              )
            })}
          </Box>
        </Box>

        {/*ad block*/}
        <Box className={styles.adContainer}>
          <Box className={styles.adTextContainer}>
            <Box>
              <h3>Creative harmonius living</h3>
              <p>
                Our Products are all made to standart sizes <br /> so that you
                can mix and match them freely.
              </p>
              <NavLink
                to="/categories/all"
                onClick={() => window.scrollTo(0, 0)}>
                <Button sx={stylesForButton.button}>SHOP NOW</Button>
              </NavLink>
            </Box>
          </Box>
          <Box className={styles.adPictureContainer}>
            <img src={harmonius} alt="example" />
          </Box>
        </Box>

        {/*recommended products*/}
        <TrendingSlider />

        {/*ad block*/}
        <Box className={styles.adContainer2}>
          <Box className={styles.adPictureContainer2}>
            <img src={comfortable} alt="example" />
          </Box>
          <Box className={styles.adTextContainer2}>
            <Box>
              <h3>Comfortable living</h3>
              <p>
                Our Products are all made to standart sizes <br /> so that you
                can mix and match them freely.
              </p>
              <NavLink
                to="/categories/all"
                onClick={() => window.scrollTo(0, 0)}>
                <Button sx={stylesForButton.button}>SHOP NOW</Button>
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomeContent
