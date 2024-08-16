import { useState } from 'react'
import AmountController from './AmountController'
import './productCardInCart.css'
import { TrashIcon } from './icons'
import { useCart } from '../hooks/useCart'

export default function ProductCardInCart ({ product }) {
  const { addToCart, reduceQuantity } = useCart()
  const { name, price, stock, description, imgURL, amountInCart } = product
  const [removeProductFromCart, setRemoveProductFromCart] = useState(false)

  const handleSubtractAmount = (dataProduct) => {
    if (amountInCart === 1) {
      setRemoveProductFromCart(true)
    } else {
      reduceQuantity({ ...dataProduct })
    }
  }
  return (
    <article className='cart-item'>
      <span className='cart-item--remove' onClick={() => setRemoveProductFromCart(true)}>
        <TrashIcon />
      </span>
      <img src={imgURL} alt='' className='cart-item--img' />
      <div className='cart-item--content'>
        <h3 className='cart-item--name'>{name}</h3>
        <p className='cart-item--stock'>Disponible: <span className='cart-item--stock-value'>{stock}</span></p>
        <p className='cart-item--description'>{description}</p>
        <AmountController product={product} amountProduct={amountInCart} addAmount={addToCart} subtractAmount={handleSubtractAmount} />
        <p className='cart-item--total'>Total: $ {amountInCart * price}</p>
      </div>
      {(removeProductFromCart) && (
        <div className='cart-item--delete'>
          <p>¿Desea eliminar el producto?</p>
          <div>
            <button onClick={() => { reduceQuantity({ ...product, amount: amountInCart }) }}>Si</button>
            <button onClick={() => { setRemoveProductFromCart(false) }}>No</button>
          </div>
        </div>)}
    </article>
  )
}
