import './App.css'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Main from './src/components/Main'
import Menu from './src/components/Menu'
import Cart from './src/components/Cart'
import { products } from './src/mocks/products.json'
import { useInterface } from './src/hooks/useInterface'
export default function App () {
  const { showMenu, hanldeShowMenu, showCart, hanldeShowCart } = useInterface()

  const searchMostSelledProducts = (products, quantityProducts) => {
    const productsInStockAndSold = products.filter(product => product.stock > 0 && product.sold > 0)
    const sortedArraybySold = productsInStockAndSold.sort((a, b) => b.sold - a.sold)
    const mostSelledProducts = sortedArraybySold.slice(0, quantityProducts)
    return mostSelledProducts
  }
  const mostSelledProducts = searchMostSelledProducts(products, 4)
  return (
    <>
      <Header hanldeShowMenu={hanldeShowMenu} hanldeShowCart={hanldeShowCart} />
      {showMenu && <Menu hanldeShowMenu={hanldeShowMenu} />}
      {showCart && <Cart products={products} />}
      {!showCart && <Main mostSelledProducts={mostSelledProducts} />}
      <Footer />
    </>
  )
}
