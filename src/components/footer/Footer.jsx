import { useState } from 'react'
import { Button, Container } from '@mui/material'

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
      fontSize: '12px',
      '&:hover': {
        background: '#FFF0F5',
      },
      marginLeft: '10px',
    },
  }

  const [email, setEmail] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div style={{ background: 'black', height: '300px', marginTop: '40px' }}>
      <Container>
        <div className={styles.footerContainer}>
          <h3>Newsletter</h3>
          <form
            onSubmit={handleFormSubmit}
            className={styles.formContainer}
            style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              name="email"
              type="email"
              value={email}
              autoComplete="email"
              placeholder="your@email.com"
              onChange={handleInputChange}
              style={{
                border: 'none',
                outline: 'none',
                height: '36.5px',
                padding: '0px 10px',
                width: '100%',
                fontSize: '15px',
              }}
            />
            <Button type="button" sx={stylesForButton.button}>
              Subsribe
            </Button>
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
      </Container>
    </div>
  )
}

export default Footer
