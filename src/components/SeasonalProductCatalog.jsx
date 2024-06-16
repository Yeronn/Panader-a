import './SeasonalProductCatalog.css'
import ProductCatalog from './ProductCatalog'
import { useFilterProducts } from '../hooks/useFilterProducts'
import { useGetPageData } from '../hooks/useGetPageData'
import { TYPEOFPRODUCTS } from '../utils/constants'

export default function SeasonalProductCatalog () {
  const { name, section } = useGetPageData()

  const { productFilter, toggleFilter, filteredProducts, getFilterClass } = useFilterProducts({ section })

  return (
    <section className='seasonal-section'>
      <h3 className='seasonal-section--name'>{name}</h3>
      {name === TYPEOFPRODUCTS.CHRISTMAS && <img src='https://hazdeoros.com/industrial/wp-content/uploads/2021/12/fruit-cake.jpg' alt='Imagen de un pan navidenio' />}
      {name === TYPEOFPRODUCTS.HALLOWEEN && <img src='https://www.recetasderechupete.com/wp-content/uploads/2014/10/halloween_frankenstein_bizcocho.jpg' alt='Imagen de un postre con tematica de halloween' />}
      <div className='filter-container'>
        {productFilter.map(filter => (
          <button
            key={filter}
            className={getFilterClass(filter)}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <ProductCatalog specialProducts={filteredProducts} />
    </section>
  )
}
