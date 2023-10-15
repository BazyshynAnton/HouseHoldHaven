import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
import Items from '../items/Items'

import products from '../../data/products'

function TrendingItem() {
  //(including 8, but not including 15), select 7 products to display.
  const filteredProducts = products.slice(8, 15)

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      {filteredProducts.map((product) => (
        <Box key={product.id}>
          <NavLink
            onClick={handleNavLinkClick}
            to={`/categories/product/${product.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Items
              key={product.id}
              img1={product.img1}
              name={product.name}
              price={product.price}
            />
          </NavLink>
        </Box>
      ))}
    </>
  )
}

export default TrendingItem
