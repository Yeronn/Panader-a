import './App.css'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Home from './src/components/Home'
import Menu from './src/components/Menu'
import Cart from './src/components/Cart'
import { products } from './src/mocks/products.json'
import { useInterface } from './src/hooks/useInterface'
import { Outlet, Route, Routes } from 'react-router-dom'
import ProductCatalog from './src/components/ProductCatalog'
import { CartProvider } from './src/context/cart'
import SeasonalProductCatalog from './src/components/SeasonalProductCatalog'

export default function App () {
  const { showMenu, hanldeShowMenu, hanldeShowCart, showCart } = useInterface()

  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Header hanldeShowMenu={hanldeShowMenu} hanldeShowCart={hanldeShowCart} />
              {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />}
              <CartProvider>
                {showCart && <Cart products={products} />}
                {!showCart &&
                  <main>
                    <Outlet />
                  </main>}
              </CartProvider>
              <Footer />
            </>
          }
        >

          <Route path='/' element={<Home products={products} />} />
          <Route path='/productos/:typeProducts' element={<ProductCatalog />} />
          <Route path='/productos/navidad' element={<SeasonalProductCatalog />} />
          <Route path='/productos/halloween' element={<SeasonalProductCatalog />} />

        </Route>
      </Routes>
    </>
  )
}
