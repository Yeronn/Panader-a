import { StarIcon, Xicon } from './icons'
import './ProductCardModal.css'

export default function ProductCardModal ({ name, price, stock, description, imgURL, closeProductModalCard }) {
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
        </div>
        <div className='product-modal--footer'>
          <span>${price}</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
