import './staggeredCard.css'
import { useProductCard } from '../hooks/useProductCard'
import AmountController from './AmountController'
import { useCart } from '../hooks/useCart'

export default function StaggeredCard ({ product, position = 'right' }) {
  const { imgURL, name, price, stock } = product
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount, totalProduct } = useProductCard({ price, stock })
  const { addToCart } = useCart()
  return (
    <article className='staggered-card'>
      <img src={imgURL} alt='' />
      <h3 className={position}>{name}</h3>
      <div className={`staggered-card--content ${position}`}>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <p>$ {totalProduct}</p>
        <button onClick={() => addToCart({ ...product, amount: amountProduct })}>Comprar</button>
      </div>
    </article>
  )
}
