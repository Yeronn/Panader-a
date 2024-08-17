import { useFilterProducts } from '../hooks/useFilterProducts.js'
import { useGetPageData } from '../hooks/useGetPageData.js'
import { filterAndSortProductsByDate } from '../logic/products.js'
import './dessertsCatalog.css'
import InvertedCard from './InvertedCard.jsx'

export default function DessertsCatalog () {
  const { section, season } = useGetPageData()
  const { filteredProducts } = useFilterProducts({ section, season })
  const newestProducts = filterAndSortProductsByDate({ products: filteredProducts, quantity: 3 })

  return (
    <section className='desserts-catalog'>
      <div className='thin-image-carousel'>
        {newestProducts.map(product => (
          <a key={product.id} href={`#producto-${product.id}`}>
            <img src={product.imgURL} alt='' />
          </a>
        ))}
      </div>
      <div className='inverted-product-cards'>
        {filteredProducts.map((product, index) => (
          <InvertedCard key={product.id} {...product} position={index % 2 === 0 ? 'invert' : ''} />
        ))}
      </div>
    </section>
  )
}
