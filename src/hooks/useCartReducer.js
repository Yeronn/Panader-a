import { useReducer } from 'react'
import { CART_ACTION_TYPES, cartInitialState, cartReducer } from '../reducers/cartReducer'

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const reduceQuantity = product => dispatch({
    type: CART_ACTION_TYPES.REDUCE_QUANTITY,
    payload: product
  })

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

  const removeProducts = () => dispatch({ type: CART_ACTION_TYPES.REMOVE_PRODUCTS })

  return { state, addToCart, reduceQuantity, clearCart, removeProducts }
}
