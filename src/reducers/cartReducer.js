import productsServices from '../services/productsServices'
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REDUCE_QUANTITY: 'REDUCE_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { amount, ...productWithoutAmount } = action.payload
    const { id } = productWithoutAmount

    const productInCartIndex = state.findIndex(item => item.id === id)

    const updatedProduct = {
      ...productWithoutAmount,
      sold: productWithoutAmount.sold + amount,
      stock: productWithoutAmount.stock - amount
    }

    if (productWithoutAmount.stock < amount && amount < 0) {
      console.log('No hay suficiente stock de este producto o la cantidad de producto que está intentando añadir es negativa')
      return state
    }

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        // { ...state[productInCartIndex], stock: state[productInCartIndex].stock + 1 },
        { ...updatedProduct },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      productsServices.updateProduct(updatedProduct)
      return newState
    }

    const newState = [
      ...state,
      updatedProduct
    ]

    productsServices.updateProduct(updatedProduct)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REDUCE_QUANTITY]: (state, action) => {
    const { amount, ...productWithoutAmount } = action.payload
    const { id } = productWithoutAmount
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0 && state[productInCartIndex].stock > 0 && state[productInCartIndex].stock >= amount) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        // { ...state[productInCartIndex], stock: state[productInCartIndex].stock - 1 },
        { ...state[productInCartIndex], stock: state[productInCartIndex].stock - amount },
        ...state.slice(productInCartIndex + 1)
      ]
      updateLocalStorage(newState)
      return newState
    } else {
      state.splice(productInCartIndex, 1)
      const newState = [...state]
      updateLocalStorage(newState)
      return newState
    }
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
