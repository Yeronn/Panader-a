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

export default {
  getProductByCategory,
  getProductBySeason,
  getProductsCategories
}
