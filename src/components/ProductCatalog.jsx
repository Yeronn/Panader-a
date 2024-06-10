import { useLocation } from 'react-router-dom'
import './productCatalog.css'
import productsServices from '../services/productsServices'

export default function ProductCatalog ({ catalogTitle, specialProducts }) {
  const { state } = useLocation()
  const title = catalogTitle ?? state.sectionName
  const products = specialProducts ?? productsServices.getProductByCategory(title) ?? productsServices.getProductBySeason(title)

  return (
    <div className='product-catalog'>
      <h3>{title}</h3>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.imgURL} alt='' />
                <figcaption>{product.name}</figcaption>
              </figure>
              <button>Comprar</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
