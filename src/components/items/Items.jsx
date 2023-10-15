import { Box } from '@mui/material'
import styles from './Items.module.css'

const Items = ({ img1, name, price }) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.imgContainer}>
        <img src={img1} alt={name} />
      </Box>
      <Box className={styles.text}>
        <h3>{name}</h3>
        <h5>{price}$</h5>
      </Box>
    </Box>
  )
}

export default Items
