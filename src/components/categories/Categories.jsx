import { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import Button from '../button/Button'
import Items from '../items/Items'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

import products from '../../data/products'

import styles from './Categories.module.css'

const Categories = () => {
  const { category } = useParams() // Getting the value of the "category" parameter from the URL
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    // Function for filtering products by selected category
    const filterProductsByCategory = () => {
      if (category === 'all') {
        // if category (all) is selected, display all products
        setFilteredProducts(products)
      } else {
        // filter products by the selected category
        const filtered = products.filter(
          (product) => product.category === category
        )
        setFilteredProducts(filtered)
      }
    }

    filterProductsByCategory() // call the filtering function when the selected category changes.
  }, [category])

  //this variable areProductsAvailable determines if there are any products available after filtering
  const areProductsAvailable = filteredProducts.length > 0

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '100px',
        }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              color: 'black',
              alignItems: 'center',
              display: 'flex',
              textAlign: 'center',
              textDecoration: 'none',
            }}>
            <NavigateBeforeIcon />
            Home
          </NavLink>
          <h3
            style={{
              fontSize: '1.5rem',
              margin: '0 auto',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: '800',
              fontFamily: 'Blinker, sans-serif',
            }}>
            {filteredProducts.length > 0
              ? filteredProducts.length === 20
                ? 'ALL'
                : filteredProducts[0].category
              : ''}
          </h3>
        </div>

        <div style={{ marginTop: '40px' }} className={styles.sortBtnContainer}>
          <ul>
            <li>
              <NavLink to="/categories/all">
                <Button>All</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/furnitures">
                <Button>Furnitures</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/electronics">
                <Button>Electronics</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/lamps">
                <Button>Lamps</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/kitchen">
                <Button>Kitchen</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/chairs">
                <Button>Chairs</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories/skincare">
                <Button>Skin Care</Button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.cardsContainer}>
          {/*checks if there are available products*/}
          {areProductsAvailable ? (
            filteredProducts.map((product) => (
              <NavLink
                key={product.id}
                to={`/categories/product/${product.id}`}
                onClick={() => window.scrollTo(0, 0)}
                style={{ textDecoration: 'none', color: 'black' }}>
                <Items
                  img1={product.img1}
                  name={product.name}
                  price={product.price}
                />
              </NavLink>
            ))
          ) : (
            // if there are no products, redirect to the NotFound page
            <h3>No products found in this category.</h3>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Categories
