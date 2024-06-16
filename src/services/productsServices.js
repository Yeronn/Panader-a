import { products } from '../mocks/products.json'

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
  console.log(targetCategory)
  return targetCategory
}

export default {
  getProductByCategory,
  getProductBySeason,
  getProductsCategories,
  getCategories,
  getCategoryByName
}
