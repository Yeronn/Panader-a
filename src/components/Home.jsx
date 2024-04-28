import { FeaturedProductsClosingWave, FeaturedProductsOpeningWave, NoveltyContainerClosingWave, NoveltyContainerOpeningWave } from './icons'
import './home.css'
import { filterAndSortProductsByDate, searchMostSelledProducts } from '../logic/products'
import ProductCatalog from './ProductCatalog'
import ProductCarousel from './ProductCarousel'

export default function Home ({ products }) {
  const mostSelledProducts = searchMostSelledProducts({ products, quantityProducts: 4 })
  const newestProducts = filterAndSortProductsByDate({ products, quantity: 3 })
  return (
    <main className='main'>
      <figure className='main-image-container'>
        <img src='https://politecnicocundinamarca.edu.co/wp-content/uploads/2018/01/hombre-barbudo-joven-casquillo-blanco-que-coloca-panaderia.jpg' alt='Imagen principal de panaderia' />
      </figure>
      <NoveltyContainerOpeningWave />
      <section className='new-products-container'>
        <h3>Novedad</h3>
        <ProductCarousel products={newestProducts} />
      </section>
      <NoveltyContainerClosingWave />
      <FeaturedProductsOpeningWave />
      <section className='most-selled-products'>
        <ProductCatalog catalogTitle='Productos más vendidos' products={mostSelledProducts} />
      </section>
      <FeaturedProductsClosingWave />
    </main>
  )
}
