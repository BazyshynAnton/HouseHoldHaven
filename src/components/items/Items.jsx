import styles from './Items.module.css'

const Items = ({ img1, name, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img1} alt={name} />
      </div>
      <div className={styles.text}>
        <h3>{name}</h3>
        <h5>{price}$</h5>
      </div>
    </div>
  )
}

export default Items
