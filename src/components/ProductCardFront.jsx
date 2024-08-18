import './productCardFront.css'
import AmountController from './AmountController'
import { useProductCard } from '../hooks/useProductCard'
import { useCart } from '../hooks/useCart'

export default function ProductCardFront ({ product }) {
  const { name, imgURL, stock, price } = product
  const { amountProduct, addAmount, handleCheckAmount, subtractAmount, totalProduct } = useProductCard({ price, stock })
  const { addToCart } = useCart()
  return (
    <article className='product-card-front'>
      <img src={imgURL} alt={name} />
      <div className='product-card-front--content'>
        <h3>{name}</h3>
        {/* <p>{description}</p> */}
        <span>Stock: {stock}</span>
        <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
        <span>Total: ${totalProduct}</span>
        <button onClick={() => addToCart({ ...product, amount: amountProduct })}>Comprar</button>
      </div>
    </article>
  )
}
