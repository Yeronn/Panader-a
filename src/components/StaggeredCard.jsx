import './staggeredCard.css'
import { useProductCard } from '../hooks/useProductCard'
import AmountController from './AmountController'

export default function StaggeredCard ({ imgURL, name, price, stock, position = 'right' }) {
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount, totalProduct } = useProductCard({ price, stock })

  return (
    <article className='staggered-card'>
      <img src={imgURL} alt='' />
      <h3 className={position}>{name}</h3>
      <div className={`staggered-card--content ${position}`}>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <p>$ {totalProduct}</p>
        <button>Comprar</button>
      </div>
    </article>
  )
}
