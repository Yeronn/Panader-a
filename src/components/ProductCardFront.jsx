import './productCardFront.css'
import AmountController from './AmountController'
import { useProductCard } from '../hooks/useProductCard'

export default function ProductCardFront ({ name, description, imgURL, stock, price }) {
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount, totalProduct } = useProductCard({ price, stock })

  return (
    <article className='product-card-front'>
      <img src={imgURL} alt={name} />
      <div className='product-card-front--content'>
        <h3>{name}</h3>
        {/* <p>{description}</p> */}
        <span>Stock: {stock}</span>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <span>Total: ${totalProduct}</span>
        <button>Comprar</button>
      </div>
    </article>
  )
}
