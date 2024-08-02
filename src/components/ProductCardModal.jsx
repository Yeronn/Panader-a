import { useProductCard } from '../hooks/useProductCard'
import AmountController from './AmountController'
import { StarIcon, Xicon } from './icons'
import './ProductCardModal.css'

export default function ProductCardModal ({ name, price, stock, description, imgURL, closeProductModalCard }) {
  const { amountProduct, totalProduct, addAmount, handleCheckAmount, subtractAmount } = useProductCard({ price, stock })

  return (
    <div className='overlay--product-modal'>
      <div className='product-modal-card'>
        <div className='product-modal-card--close' onClick={() => closeProductModalCard()}>
          <Xicon />
        </div>
        <img class='product-modal--img' src={imgURL} alt={name} />
        <div className='product-modal--container'>
          <h5 className='product-modal--container-title'>{name}</h5>
          <div className='product-modal--container-content'>
            <div className='product-modal--container-rating-box'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon scoreClass='gray-star' />
            </div>
            <span className='product-modal--container-score'>5.0</span>
          </div>
          <p>{description}</p>
          <p>Disponibles: {stock}</p>
          <p>Precio: ${price}</p>
        </div>
        <div className='product-modal--footer'>
          <AmountController amountProduct={amountProduct} handleCheckAmount={handleCheckAmount} addAmount={addAmount} subtractAmount={subtractAmount} />
          <span>Total: {totalProduct}</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
