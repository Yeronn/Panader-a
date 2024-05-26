import { useState } from 'react'

export function useInterface () {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const hanldeShowMenu = (closeMenu = false) => {
    if (!closeMenu) setShowCart(false)
    setShowMenu(!showMenu)
  }

  const hanldeShowCart = (appearCart = !showCart) => {
    setShowMenu(false)
    setShowCart(appearCart)
  }

  return {
    showMenu,
    hanldeShowMenu,
    showCart,
    hanldeShowCart
  }
}
