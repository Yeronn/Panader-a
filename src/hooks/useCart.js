import { useContext } from 'react'
import { cartContext } from '../context/cart'

export function useCart () {
  const context = useContext(cartContext)

  if (context === undefined) {
    throw new Error('useCart deberia estar dentro de CartProvider')
  }

  return context
}
