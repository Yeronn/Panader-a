import './invertedCard.css'
import AmountController from './AmountController'
import { useProductCard } from '../hooks/useProductCard'
import { useCart } from '../hooks/useCart'

export default function InvertedCard ({ product, position = 'invert' }) {
  const { id, name, description, stock, price, imgURL } = product
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount, totalProduct } = useProductCard({ price, stock })
  const { addToCart } = useCart()

  return (
    <article id={`producto-${id}`} className={`inverted-card ${position}`}>
      <img src={imgURL} alt='' />
      <div className='inverted-card--content'>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Stock: {stock}</span>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <span>Total: $ {totalProduct}</span>
        <button onClick={() => addToCart({ ...product, amount: amountProduct })}>Comprar</button>
      </div>
    </article>
  )
}
