import { useLocation } from 'react-router-dom'
import './productCatalog.css'
import productsServices from '../services/productsServices'
import ProductCardModal from './ProductCardModal'
import { useProductCardModal } from '../hooks/useProductCardModal'
import { syncProductsWithCart } from '../logic/products'
import { useCart } from '../hooks/useCart'

export default function ProductCatalog ({ catalogTitle, specialProducts }) {
  const { state } = useLocation() ?? null
  const { cart } = useCart()
  let products = specialProducts ?? productsServices.getProductByCategory(state?.section)
  products = syncProductsWithCart({ products, cart })

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
