import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const cartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, reduceQuantity, removeFromCart, clearCart } = useCartReducer()
  return (
    <cartContext.Provider value={{
      cart: state,
      addToCart,
      reduceQuantity,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </cartContext.Provider>
  )
}
