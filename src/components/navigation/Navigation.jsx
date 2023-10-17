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
  Box,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import websiteLogo from '../../images/websiteLogo.png'

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

const stylesForIndicator = {
  position: 'absolute',
  right: '0',
  top: '0',
  transform: 'translate(-10%, 10%)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  paddingLeft: '4px',
  paddingRight: '4px',
  borderRadius: '50px',
  fontSize: '15px',
  color: 'white',
  fontFamily: 'Nunito',
  background: 'green',
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
    <Box
      sx={{
        background: '#fff',
      }}
    >
      <AppBar
        sx={{
          background: 'white',
          boxShadow: 'none',
        }}
      >
        <Container>
          {isDesktop && (
            <Toolbar
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              disableGutters
            >
              <>
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  <Box sx={{ width: '60px', height: '60px' }}>
                    <img
                      src={websiteLogo}
                      alt="website-logo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </NavLink>
                <List
                  sx={{
                    display: 'flex',
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <ListItem>
                      <NavLink
                        to="."
                        style={style}
                        onClick={() => window.scrollTo(0, 0)}
                      >
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
                        }}
                      >
                        <h5 className={styles.textInBar}>PRODUCT PAGE</h5>
                      </NavLink>
                    </ListItem>

                    <ListItem>
                      {/* Shopping cart in navbar */}
                      <Box
                        sx={{ color: 'black', cursor: 'pointer' }}
                        onClick={handleCartIconClick}
                      >
                        <ShoppingCartIcon />
                        {!!cartProducts.length && (
                          <span style={stylesForIndicator}>
                            {cartProducts.length}
                          </span>
                        )}
                      </Box>
                      {/* Show Cart Sliding Menu */}
                      <CartMenu
                        isOpen={isCartMenuOpen}
                        handleCloseCartMenu={handleCloseCartMenu}
                      />
                    </ListItem>
                  </Box>
                </List>
              </>
            </Toolbar>
          )}

          {/*
        either a list of links (if the width is greater than 480px)
        or a menu button (if the width is less than 480px) is displayed
        */}
          {!isDesktop && (
            <Toolbar
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              disableGutters
            >
              <List sx={{ display: 'flex' }}>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
                <ListItem>
                  {/* Shopping cart in navbar */}
                  <Box
                    sx={{ color: 'black', cursor: 'pointer' }}
                    onClick={handleCartIconClick}
                  >
                    <ShoppingCartIcon />
                    {!!cartProducts.length && (
                      <span style={stylesForIndicator}>
                        {cartProducts.length}
                      </span>
                    )}
                  </Box>
                  {/* Show Cart Sliding Menu */}
                  <CartMenu
                    isOpen={isCartMenuOpen}
                    handleCloseCartMenu={handleCloseCartMenu}
                  />
                </ListItem>
              </List>
            </Toolbar>
          )}
        </Container>

        {/*overlay that appears when the cart menu (CartMenu) is open*/}
        {isCartMenuOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: '998',
            }}
            onClick={handleCloseCartMenu}
          ></Box>
        )}

        {/*pull-down menu (for mobile version)*/}
        {!isDesktop && (
          <SwipeableDrawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            anchor="top"
          >
            <IconButton onClick={() => setOpen(false)}>
              <KeyboardArrowUpIcon />
            </IconButton>
            <Divider />
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <Box sx={{ width: '60px', height: '60px' }}>
                  <img
                    src={websiteLogo}
                    alt="website-logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </NavLink>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <NavLink
                  to="/"
                  style={style}
                  onClick={() => {
                    window.scrollTo(0, 0)
                    setOpen(false)
                  }}
                >
                  <h5 className={styles.textInBar}>HOME</h5>
                </NavLink>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <NavLink
                  to="categories/all"
                  style={style}
                  onClick={() => {
                    window.scrollTo(0, 0)
                    setOpen(false)
                  }}
                >
                  <h5 className={styles.textInBar}>CATEGORIES</h5>
                </NavLink>
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <NavLink
                  to="/categories/product/8853fbbe-2649-11ee-be56-0242ac120002"
                  onClick={() => {
                    window.scrollTo(0, 0)
                    setOpen(false)
                  }}
                  style={{
                    ...style,
                    width: '110px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <h5 className={styles.textInBar}>PRODUCT PAGE</h5>
                </NavLink>
              </ListItem>
            </List>
          </SwipeableDrawer>
        )}
      </AppBar>
    </Box>
  )
}

export default Navigation
