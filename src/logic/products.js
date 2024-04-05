export const searchMostSelledProducts = ({ products, quantityProducts }) => {
  const productsInStockAndSold = products.filter(product => product.stock > 0 && product.sold > 0)
  const sortedArraybySold = productsInStockAndSold.sort((a, b) => b.sold - a.sold)
  const mostSelledProducts = sortedArraybySold.slice(0, quantityProducts)
  return mostSelledProducts
}

export const filterAndSortProductsByDate = ({ products, quantity }) => {
  const filteredProducts = products.filter(product => product.stock > 0)
  const sortProductsByDate = filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sortProductsByDate.slice(0, quantity)
}
