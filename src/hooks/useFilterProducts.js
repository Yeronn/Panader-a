import { useEffect, useState } from 'react'
import productsServices from '../services/productsServices'
import { syncProductsWithCart } from '../logic/products'

export function useFilterProducts ({ section, season = false }) {
  const [filterProducts, setFilterProducts] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState([])

  const productFilter = ['all', ...productsServices.getProductsCategories()]
  const products = season ? productsServices.getProductBySeason(section) : productsServices.getProductByCategory(section)

  const toggleFilter = (filter) => {
    setFilterProducts((prevFilter) =>
      prevFilter === filter
        ? 'all'
        : filter
    )
  }

  useEffect(() => {
    const isNewSession = !window.sessionStorage.getItem('sessionActive')
    if (isNewSession) {
      window.localStorage.removeItem('hasSyncedWithCart')
      window.sessionStorage.setItem('sessionActive', 'true')
    }

    const initialFilteredProducts = products.filter((product) =>
      product.category === filterProducts || filterProducts === 'all'
    )

    const hasSynced = window.localStorage.getItem('hasSyncedWithCart')
    if (!hasSynced) {
      console.log(hasSynced)

      setFilteredProducts(syncProductsWithCart({ products: initialFilteredProducts })) // TODO: En lugar de usar el carrito en el local storage, usar mejor el carrito mismo y paserselo a la funcion como parametros
      window.localStorage.setItem('hasSyncedWithCart', 'true')
    } else {
      setFilteredProducts(initialFilteredProducts)
    }

    return () => {
      window.localStorage.removeItem('hasSyncedWithCart')
    }
  }, [filterProducts])

  const getFilterClass = (filter) => filter === filterProducts ? 'filter activeFilter' : 'filter inactiveFilter'

  return {
    productFilter,
    toggleFilter,
    filteredProducts,
    getFilterClass
  }
}
