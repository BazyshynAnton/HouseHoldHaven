import { Box, Container } from '@mui/material'
import TrendingProducts from './TrendingProducts'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import styles from './TrendingSlider.module.css'

function TrendingSlider() {
  //used to scroll the contents of the slider to the left
  const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 235
  }

  //used to scroll the contents of the slider to the right
  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 235
  }

  return (
    <Container>
      <div className={styles.mainContainer}>
        <div className={styles.titleBtns}>
          <h3>Trending Now</h3>
          <div className={styles.btns}>
            <button title="scroll left" onClick={slideLeft}>
              <NavigateBeforeIcon />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <NavigateNextIcon />
            </button>
          </div>
        </div>
        <div className={styles.rowContainer} id="slider">
          <TrendingProducts />
        </div>
      </div>
    </Container>
  )
}

export default TrendingSlider
