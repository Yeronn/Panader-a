import './App.css'
import { productsList } from './src/mocks/products.json'
import { useInterface } from './src/hooks/useInterface'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CartProvider } from './src/context/cart'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Home from './src/components/Home'
import Menu from './src/components/Menu'
import Cart from './src/components/Cart'
import ProductCatalog from './src/components/ProductCatalog'
import SeasonalProductCatalog from './src/components/SeasonalProductCatalog'
import BreadCatalog from './src/components/BreadCatalog'
import DessertsCatalog from './src/components/DessertsCatalog.jsx'
import CakeCatalog from './src/components/CakeCatalog.jsx'

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
                {showCart && <Cart products={productsList} />}
                {!showCart &&
                  <main>
                    <Outlet />
                  </main>}
              </CartProvider>
              <Footer />
            </>
          }
        >

          <Route path='/' element={<Home products={productsList} />} />
          <Route path='/productos/:typeProducts' element={<ProductCatalog />} />
          <Route path='/productos/panes' element={<BreadCatalog />} />
          <Route path='/productos/postres' element={<DessertsCatalog />} />
          <Route path='/productos/tortas' element={<CakeCatalog />} />
          <Route path='/productos/temporada/navidad' element={<SeasonalProductCatalog />} />
          <Route path='/productos/temporada/halloween' element={<SeasonalProductCatalog />} />

        </Route>
      </Routes>
    </>
  )
}
