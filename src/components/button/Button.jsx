import styles from './Button.module.css'

const Button = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: 'initial',
        cursor: 'pointer',
        padding: '0.3rem 1.3rem',
        transition: 'all 0.2s',
      }}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button
