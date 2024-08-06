import { useFilterProducts } from '../hooks/useFilterProducts'
import { useGetPageData } from '../hooks/useGetPageData'
import './cakeCatalog.css'
import ProductCardFront from './ProductCardFront'

export default function CakeCatalog () {
  const { section, season } = useGetPageData()
  const { filteredProducts } = useFilterProducts({ section, season })
  return (
    <section className='cake-catalog'>
      {filteredProducts.map(product => (
        <ProductCardFront key={product.id} {...product} />
      ))}
    </section>
  )
}
