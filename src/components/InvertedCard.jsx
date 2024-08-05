import './invertedCard.css'
import AmountController from './AmountController'
import { useProductCard } from '../hooks/useProductCard'

export default function InvertedCard ({ id, name, description, stock, price, imgURL, position = 'invert' }) {
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount, totalProduct } = useProductCard({ price, stock })

  return (
    <article id={`producto-${id}`} className={`inverted-card ${position}`}>
      <img src={imgURL} alt='' />
      <div className='inverted-card--content'>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Stock: {stock}</span>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <span>Total: $ {totalProduct}</span>
        <button>Comprar</button>
      </div>
    </article>
  )
}
