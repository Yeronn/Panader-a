import { useLocation } from 'react-router-dom'
import './productCatalog.css'
import productsServices from '../services/productsServices'
import { StarIcon } from './icons'

export default function ProductCatalog ({ catalogTitle, specialProducts }) {
  const { state } = useLocation() ?? null
  // const title = catalogTitle ?? state?.name
  const products = specialProducts ?? productsServices.getProductByCategory(state?.section) ?? productsServices.getProductBySeason(state?.section)

  return (
    <div className='product-catalog'>
      {/* {title && <h3>{title}</h3>} */}
      <ul>
        {
          products.map((product) => (
            <li key={product.id} onClick={() => productsServices.buyProduct(product.id, 3)}>
              <figure>
                <img src={product.imgURL} alt='' />
                <figcaption>{product.name}</figcaption>
              </figure>
              <button>Comprar</button>
            </li>
          ))
        }
      </ul>
      <div className='product-modal'>
        <img class='product-modal--img' src='https://i.pinimg.com/564x/ff/b2/d4/ffb2d49ecf328f81afc5c7ed00a83c7f.jpg' alt='product image' />
        <div className='product-modal--container'>
          <h5 className='product-modal--container-title'>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo expedita laborum omnis. Reprehenderit, ducimus deleniti. Deserunt sapiente ullam sit, dolor pariatur reiciendis tenetur suscipit harum neque error ipsam saepe doloremque?</p>
        </div>
        <div className='product-modal--footer'>
          <span>$599</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
