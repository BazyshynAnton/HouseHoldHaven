import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout'
import Home from './Pages/home/Home'
import CategoriesPage from './Pages/categoriesPage/CategoriesPage'
import ProductPage from './Pages/productPage/ProductPage'
import NotFound from './components/notFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/categories/:category" element={<CategoriesPage />} />
        <Route path="categories/product/:id" element={<ProductPage />} />
        <Route exact path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
