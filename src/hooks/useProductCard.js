import { useState } from 'react'

export function useProductCard ({ price, stock, initialAmountProduct = 1 }) {
  if (stock === 0) initialAmountProduct = stock
  const [amountProduct, setAmountProduct] = useState(initialAmountProduct)
  const [totalProduct, setTotalProduct] = useState(price * initialAmountProduct)

  const handleCheckAmount = (event) => {
    const inputAmount = Number(event.target.value)
    if (!isNaN(inputAmount) && Number.isInteger(inputAmount) && inputAmount <= stock) {
      setAmountProduct(inputAmount)
      handleTotal(inputAmount)
    } else {
      console.log('Debes ingresar una cantidad valida, entera y menor o igual al stock')
    }
  }
  const addAmount = () => {
    const newAmount = amountProduct + 1
    if (newAmount > stock) return
    setAmountProduct(newAmount)
    handleTotal(newAmount)
  }
  const subtractAmount = () => {
    if (amountProduct === 0) return
    const newAmount = amountProduct - 1
    setAmountProduct(newAmount)
    handleTotal(newAmount)
  }
  const handleTotal = (newAmount) => {
    const newTotal = newAmount * price
    setTotalProduct(newTotal)
  }
  return {
    amountProduct,
    totalProduct,
    handleCheckAmount,
    addAmount,
    subtractAmount
  }
}
