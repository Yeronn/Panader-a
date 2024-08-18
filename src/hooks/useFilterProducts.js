import { useEffect, useState } from 'react'
import productsServices from '../services/productsServices'
import { syncProductsWithCart } from '../logic/products'
import { useCart } from './useCart'

export function useFilterProducts ({ section, season = false }) {
  const [filterProducts, setFilterProducts] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState([])

  const productFilter = ['all', ...productsServices.getProductsCategories()]
  const products = season ? productsServices.getProductBySeason(section) : productsServices.getProductByCategory(section)

  const { cart } = useCart()

  const toggleFilter = (filter) => {
    setFilterProducts((prevFilter) =>
      prevFilter === filter
        ? 'all'
        : filter
    )
  }

  useEffect(() => {
    const initialFilteredProducts = products.filter((product) =>
      product.category === filterProducts || filterProducts === 'all'
    )
    setFilteredProducts(syncProductsWithCart({ products: initialFilteredProducts, cart }))
  }, [cart, filterProducts])

  const getFilterClass = (filter) => filter === filterProducts ? 'filter activeFilter' : 'filter inactiveFilter'

  return {
    productFilter,
    toggleFilter,
    filteredProducts,
    getFilterClass
  }
}
