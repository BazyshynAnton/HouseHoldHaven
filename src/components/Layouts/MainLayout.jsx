import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

//main layout for all app content
const MainLayout = () => {
  return (
    //vertical column structure using Flexbox.
    //MinHeight: '100vh' sets the viewport's minimum height to keep the height even when the content is small!!
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <div style={{ flex: '1' }}>
        <Navigation />
        <Outlet />
      </div>
      {/*flexShrink: 0 prevents the Footer component from shrinking when there is not enough space*/}
      <Footer style={{ flexShrink: 0 }} />
    </div>
  )
}

export default MainLayout
