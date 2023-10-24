import { Box, Button, Container } from '@mui/material'

import styles from './Footer.module.css'
import { useState } from 'react'

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
    <Box sx={{ background: 'black', height: '300px', marginTop: '40px' }}>
      <Container>
        <Box className={styles.footerContainer}>
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
          <Box className={styles.lastList}>
            <ul>
              <li>About</li>
              <li>Store locator</li>
              <li>FAQs</li>
              <li>News</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </Box>
          <h5>Built with Love.</h5>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
