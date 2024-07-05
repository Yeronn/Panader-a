import { productsList } from '../mocks/products.json'

let products = [...productsList]

const getProductByCategory = (category) => {
  const productsByCategory = products.filter((product) => product.category === category || category === 'all')
  return productsByCategory.length > 0 ? productsByCategory : undefined
}

const getProductBySeason = (season) => {
  const productsBySeason = products.filter((product) => product.season === season)
  return productsBySeason
}

const getProductsCategories = () => {
  const categories = products.map(({ category }) => category)
  return [...new Set(categories)]
}

const getCategories = () => {
  const categories = [
    { id: 1, section: 'all', name: 'Todo', season: false },
    { id: 2, section: 'bread', name: 'Panes', season: false },
    { id: 3, section: 'dessert', name: 'Postres', season: false },
    { id: 4, section: 'cream', name: 'Cremas', season: false },
    { id: 5, section: 'cake', name: 'Tortas', season: false },
    { id: 6, section: 'christmas', name: 'Navidad', season: true },
    { id: 7, section: 'halloween', name: 'Halloween', season: true }
  ]
  return categories
}

const getCategoryByName = (name) => {
  const categories = [
    { id: 1, section: 'all', name: 'Todo', season: false },
    { id: 2, section: 'bread', name: 'Panes', season: false },
    { id: 3, section: 'dessert', name: 'Postres', season: false },
    { id: 4, section: 'cream', name: 'Cremas', season: false },
    { id: 5, section: 'cake', name: 'Tortas', season: false },
    { id: 6, section: 'christmas', name: 'Navidad', season: true },
    { id: 7, section: 'halloween', name: 'Halloween', season: true }
  ]
  const targetCategory = categories.find(category => name === category.name)
  return targetCategory
}

const buyProduct = (id, amount) => {
  if (amount <= 0) return
  const boughtProduct = products.find(product => (product.id === id))
  if (boughtProduct && boughtProduct.stock >= amount) {
    boughtProduct.stock = boughtProduct.stock - amount
    boughtProduct.sold = boughtProduct.sold + amount
    products = products.filter(product => product.id !== id)
    products = [...products, boughtProduct]
    return true
  } else {
    console.log('el producto no existe')
    return false
  }
}

export default {
  getProductByCategory,
  getProductBySeason,
  getProductsCategories,
  getCategories,
  getCategoryByName,
  buyProduct
}
