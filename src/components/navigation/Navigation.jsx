import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartMenu from '../cartMenu/CartMenu'
import {
  AppBar,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import styles from './Navigation.module.css'

//styles for links (NavLink)
const style = ({ isActive }) =>
  isActive
    ? {
        color: 'black',
        textDecoration: 'none',
      }
    : {
        textDecoration: 'none',
        color: 'black',
      }

const Navigation = () => {
  //opening and closing the shopping cart menu
  const [open, setOpen] = useState(false)
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)

  //useMediaQuery from Material-UI is used to check the current screen size
  const isDesktop = useMediaQuery('(min-width: 480px)')

  //useContext to get data from cart context (CartContext)
  const { cartProducts } = useContext(CartContext)

  //function - results in an open if it was closed, and a close if it was open
  const handleCartIconClick = () => {
    setIsCartMenuOpen(!isCartMenuOpen)
  }

  //function - closes the cart menu
  const handleCloseCartMenu = () => {
    setIsCartMenuOpen(false)
  }

  return (
    <AppBar position="sticky" sx={{ background: 'white', boxShadow: 'none' }}>
      <Toolbar sx={{ marginLeft: 'auto' }} disableGutters>
        {isDesktop && (
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <NavLink
                to="."
                style={style}
                onClick={() => window.scrollTo(0, 0)}>
                <h5 className={styles.textInBar}>HOME</h5>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="categories/all" style={style}>
                <h5 className={styles.textInBar}>CATEGORIES</h5>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/categories/product/8853fbbe-2649-11ee-be56-0242ac120002"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  ...style,
                  width: '110px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  color: 'black',
                }}>
                <h5 className={styles.textInBar}>PRODUCT PAGE</h5>
              </NavLink>
            </ListItem>

            <ListItem>
              {/* Shopping cart in navbar */}
              <div className={styles.cartIcon} onClick={handleCartIconClick}>
                <ShoppingCartIcon />
                {!!cartProducts.length && (
                  <span className={styles.indicator}>
                    {cartProducts.length}
                  </span>
                )}
              </div>
              {/* Show Cart Sliding Menu */}
              <CartMenu
                isOpen={isCartMenuOpen}
                handleCloseCartMenu={handleCloseCartMenu}
              />
            </ListItem>
          </List>
        )}

        {/*
        either a list of links (if the width is greater than 480px)
        or a menu button (if the width is less than 480px) is displayed
        */}
        {!isDesktop && (
          <List sx={{ display: 'flex' }}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <ListItem>
              {/* Shopping cart in navbar */}
              <div className={styles.cartIcon} onClick={handleCartIconClick}>
                <ShoppingCartIcon />
                {!!cartProducts.length && (
                  <span className={styles.indicator}>
                    {cartProducts.length}
                  </span>
                )}
              </div>
              {/* Show Cart Sliding Menu */}
              <CartMenu
                isOpen={isCartMenuOpen}
                handleCloseCartMenu={handleCloseCartMenu}
              />
            </ListItem>
          </List>
        )}
      </Toolbar>

      {/*overlay that appears when the cart menu (CartMenu) is open*/}
      {isCartMenuOpen && (
        <div className={styles.overlay} onClick={handleCloseCartMenu}></div>
      )}

      {/*pull-down menu (for mobile version)*/}
      {!isDesktop && (
        <SwipeableDrawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          anchor="top">
          <IconButton onClick={() => setOpen(false)}>
            <KeyboardArrowUpIcon />
          </IconButton>
          <Divider />
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <NavLink
                to="."
                style={style}
                onClick={() => window.scrollTo(0, 0)}>
                <h5 className={styles.textInBar}>HOME</h5>
              </NavLink>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <NavLink to="categories/all" style={style}>
                <h5 className={styles.textInBar}>CATEGORIES</h5>
              </NavLink>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <NavLink
                to="/categories/product/8853fbbe-2649-11ee-be56-0242ac120002"
                onClick={() => window.scrollTo(0, 0)}
                style={{
                  ...style,
                  width: '110px',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  color: 'black',
                }}>
                <h5 className={styles.textInBar}>PRODUCT PAGE</h5>
              </NavLink>
            </ListItem>
          </List>
        </SwipeableDrawer>
      )}
    </AppBar>
  )
}

export default Navigation
