import { useLocation } from 'react-router-dom'
import './productCatalog.css'
import productsServices from '../services/productsServices'
import ProductCardModal from './ProductCardModal'
import { useProductCardModal } from '../hooks/useProductCardModal'

export default function ProductCatalog ({ catalogTitle, specialProducts }) {
  const { state } = useLocation() ?? null
  // const title = catalogTitle ?? state?.name
  const products = specialProducts ?? productsServices.getProductByCategory(state?.section) ?? productsServices.getProductBySeason(state?.section)

  const { showProductModalCard, productModalCardInfo, closeProductModalCard, openShowProductModalCard } = useProductCardModal()
  return (
    <div className='product-catalog'>
      {/* {title && <h3>{title}</h3>} */}
      <ul>
        {
          products.map((product) => (
            <li key={product.id} onClick={() => openShowProductModalCard(product)}>
              <figure>
                <img src={product.imgURL} alt='' />
                <figcaption>{product.name}</figcaption>
              </figure>
              <button>Comprar</button>
            </li>
          ))
        }
      </ul>
      {showProductModalCard && <ProductCardModal {...productModalCardInfo} closeProductModalCard={closeProductModalCard} />}
    </div>
  )
}
