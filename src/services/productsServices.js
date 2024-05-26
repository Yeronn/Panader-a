import { products } from '../mocks/products.json'

const getProductByCategory = (category) => {
  const productsByCategory = products.filter((product) => product.category === category || category === 'Todo')
  return productsByCategory
}

const getProductBySeason = (season) => {
  const productsBySeason = products.filter((product) => product.season === season)
  return productsBySeason
}

export default {
  getProductByCategory,
  getProductBySeason
}
