import { useLocation } from 'react-router-dom'
import productsServices from '../services/productsServices'
import './SeasonalProductCatalog.css'
import ProductCatalog from './ProductCatalog'
import { useState } from 'react'

export default function SeasonalProductCatalog () {
  const { state } = useLocation()
  const { sectionName } = state
  // TODO: Cuando escribo una URL la pagina no carga, debido a que solo permite navegar atraves del menu, entonces hay que encontrar una forma que tome la url y traiga la pagina

  const productFilter = ['all', ...productsServices.getProductsCategories()]
  const products = productsServices.getProductBySeason(sectionName)

  const [activeFilters, setActiveFilters] = useState([])
  const toggleFilter = (category) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    )
  }
  const clearAllFilters = () => {
    setActiveFilters([])
  }
  const filteredProducts = products.filter((product) =>
    activeFilters.length === 0 ? true : activeFilters.includes(product.category)
  )

  const name = sectionName[0].toUpperCase() + sectionName.slice(1)

  return (
    <section className='seasonal-section'>
      <h3 className='seasonal-section--name'>{name}</h3>
      <img src='https://hazdeoros.com/industrial/wp-content/uploads/2021/12/fruit-cake.jpg' alt='Imagen de un pan navidenio' />
      <div className='filter-container'>
        {productFilter.map(filter => (
          <button
            key={filter}
            className={activeFilters.includes(filter) ? 'filter activeFilter' : 'filter inactiveFilter'}
            onClick={() => filter !== 'all' ? toggleFilter(filter) : clearAllFilters()}
          >
            {filter}
          </button>
        ))}
      </div>
      <ProductCatalog specialProducts={filteredProducts} />
    </section>
  )
}
