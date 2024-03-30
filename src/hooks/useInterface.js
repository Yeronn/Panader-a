import { useState } from 'react'

export function useInterface () {
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

  return {
    showMenu,
    hanldeShowMenu,
    showCart,
    hanldeShowCart
  }
}
