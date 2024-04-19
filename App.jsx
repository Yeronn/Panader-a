import './App.css'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Home from './src/components/Home'
import Menu from './src/components/Menu'
import Cart from './src/components/Cart'
import { products } from './src/mocks/products.json'
import { useInterface } from './src/hooks/useInterface'
import { Route, Routes } from 'react-router-dom'
export default function App () {
  const { showMenu, hanldeShowMenu, showCart, hanldeShowCart } = useInterface()

  return (
    <>
      <Header hanldeShowMenu={hanldeShowMenu} hanldeShowCart={hanldeShowCart} />
      {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />}
      {showCart && <Cart products={products} />}
      <Routes>
        {!showCart && <Route path='/' element={<Home products={products} />} />}
      </Routes>
      <Footer />
    </>
  )
}
