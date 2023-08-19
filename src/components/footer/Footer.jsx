import { Button, TextField } from '@mui/material'
import styles from './Footer.module.css'

const Footer = () => {
  //contains styles for the button
  const stylesForButton = {
    button: {
      background: 'rgba(211, 211, 211, 0.8)',
      borderRadius: 0,
      border: 'none',
      color: 'black',
      fontFamily: 'Ubuntu',
      '&:hover': {
        background: '#FFF0F5',
      },
      marginLeft: '10px',
    },
  }

  //styles for input text field
  const customInputStyle = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-root': {
      height: '36.5px',
    },
    background: 'white',
  }

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3>Newsletter</h3>
        <form>
          <TextField
            type={'text'}
            placeholder="your@email.com"
            sx={customInputStyle}
          />
          <Button sx={stylesForButton.button}>Subsribe</Button>
        </form>
        <div className={styles.lastList}>
          <ul>
            <li>About</li>
            <li>Store locator</li>
            <li>FAQs</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <h5>Built with Love.</h5>
      </div>
    </div>
  )
}

export default Footer
