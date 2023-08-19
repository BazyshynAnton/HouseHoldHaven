import { NavLink } from 'react-router-dom'
import Items from '../items/Items'

import products from '../../data/products'

import styles from './TrendingSlider.module.css'

function TrendingItem() {
  //(including 8, but not including 15), select 7 products to display.
  const filteredProducts = products.slice(8, 15)

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      {filteredProducts.map((product) => (
        <div className={styles.containerProduct} key={product.id}>
          <NavLink
            onClick={handleNavLinkClick}
            to={`/categories/product/${product.id}`}>
            <Items
              key={product.id}
              img1={product.img1}
              name={product.name}
              price={product.price}
            />
          </NavLink>
        </div>
      ))}
    </>
  )
}

export default TrendingItem
