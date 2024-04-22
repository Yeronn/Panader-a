import './App.css'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Home from './src/components/Home'
import Menu from './src/components/Menu'
import Cart from './src/components/Cart'
import { products } from './src/mocks/products.json'
import { useInterface } from './src/hooks/useInterface'
import { Outlet, Route, Routes } from 'react-router-dom'
import Catalogue from './src/components/Catalogue'
export default function App () {
  const { showMenu, hanldeShowMenu, showCart, hanldeShowCart } = useInterface()

  return (
    <>
      {/* {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />} */}
      <Routes>
        <Route
          element={
            <>
              <Header hanldeShowMenu={hanldeShowMenu} hanldeShowCart={hanldeShowCart} />
              {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />}
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path='/' element={<Home products={products} />} />
          <Route path='/cart' element={<Cart products={products} />} />
          <Route path='/Products' element={<Catalogue />} />
        </Route>
      </Routes>
    </>
  )
}
