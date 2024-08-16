import { useState } from 'react'
import AmountController from './AmountController'

export default function ProductCardInCart ({ product, deleteProduct, addToCart, reduceQuantity }) {
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
            <button onClick={() => { reduceQuantity({ ...product, amount: 1 }) }}>Si</button>
            <button onClick={() => { setRemoveProductFromCart(false) }}>No</button>
          </div>
        </div>)}
    </article>
  )
}
