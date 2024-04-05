import './App.css'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Main from './src/components/Main'
import Menu from './src/components/Menu'
import Cart from './src/components/Cart'
import { products } from './src/mocks/products.json'
import { useInterface } from './src/hooks/useInterface'
export default function App () {
  const { showMenu, hanldeShowMenu, showCart, hanldeShowCart } = useInterface()

  return (
    <>
      <Header hanldeShowMenu={hanldeShowMenu} hanldeShowCart={hanldeShowCart} />
      {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />}
      {showCart && <Cart products={products} />}
      {!showCart && <Main products={products} />}
      <Footer />
    </>
  )
}
