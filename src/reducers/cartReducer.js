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
    const { amount, amountInCart, ...product } = action.payload
    const { id } = product

    const productInCartIndex = state.findIndex(item => item.id === id)

    if (product.stock < amount || amount <= 0) {
      console.log('No hay suficiente stock de este producto o la cantidad de producto que está intentando añadir no es valida')
      return state
    }

    const updatedProduct = {
      ...product,
      stock: product.stock - amount
    }

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...updatedProduct, amountInCart: state[productInCartIndex].amountInCart + amount },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      productsServices.updateProduct(updatedProduct)
      return newState
    }

    const newState = [
      ...state,
      { ...updatedProduct, amountInCart: amount }
    ]

    productsServices.updateProduct(updatedProduct)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REDUCE_QUANTITY]: (state, action) => {
    const { amount, amountInCart, ...product } = action.payload
    const { id } = product
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (!(productInCartIndex >= 0)) {
      console.log('El producto no se encuentra en el carrito')
      return state
    }

    const updatedProduct = {
      ...product,
      stock: product.stock + amount
    }

    productsServices.updateProduct(updatedProduct)
    if (amountInCart - amount <= 0) {
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state.slice(0, productInCartIndex),
      { ...updatedProduct, amountInCart: state[productInCartIndex].amountInCart - amount },
      ...state.slice(productInCartIndex + 1)
    ]
    updateLocalStorage(newState)
    return newState
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
