import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'
import Cart from './components/Cart'
export default function App () {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const hanldeShowMenu = () => {
    setShowCart(false)
    setShowMenu(!showMenu)
  }

  const hanldeShowCart = () => {
    setShowMenu(false)
    setShowCart(!showCart)
  }
  return (
    <>
      <Header hanldeShowMenu={hanldeShowMenu} hanldeShowCart={hanldeShowCart} />
      {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />}
      {showCart && <Cart />}
      {!showCart && <Main />}
      <Footer />
    </>
  )
}
