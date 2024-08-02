import { useState } from 'react'
import productsServices from '../services/productsServices'

export function useFilterProducts ({ section, season = false }) {
  const productFilter = ['all', ...productsServices.getProductsCategories()]
  const products = season ? productsServices.getProductBySeason(section) : productsServices.getProductByCategory(section)

  const [filterProducts, setFilterProducts] = useState('all')
  const toggleFilter = (filter) => {
    setFilterProducts((prevFilter) =>
      prevFilter === filter
        ? 'all'
        : filter
    )
  }

  const filteredProducts = products.filter((product) =>
    product.category === filterProducts || filterProducts === 'all'
  )

  const getFilterClass = (filter) => filter === filterProducts ? 'filter activeFilter' : 'filter inactiveFilter'

  return {
    productFilter,
    toggleFilter,
    filteredProducts,
    getFilterClass
  }
}
