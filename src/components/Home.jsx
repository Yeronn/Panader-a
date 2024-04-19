import { FeaturedProductsClosingWave, FeaturedProductsOpeningWave, NoveltyContainerClosingWave, NoveltyContainerOpeningWave } from './icons'
import './main.css'
import { filterAndSortProductsByDate, searchMostSelledProducts } from '../logic/products'

export default function Home ({ products }) {
  const mostSelledProducts = searchMostSelledProducts({ products, quantityProducts: 4 })

  const newestProducts = filterAndSortProductsByDate({ products, quantity: 3 })

  console.log(newestProducts)
  return (
    <main className='main'>
      <figure className='main-image-container'>
        <img src='https://politecnicocundinamarca.edu.co/wp-content/uploads/2018/01/hombre-barbudo-joven-casquillo-blanco-que-coloca-panaderia.jpg' alt='Imagen principal de panaderia' />
      </figure>
      <NoveltyContainerOpeningWave />
      <section className='novelty-container'>
        <h3>Novedad</h3>
        <ul className='news-carousel'>
          {
            newestProducts.map(product => (
              <li key={product.id}>
                <figure>
                  <img src={product.imgURL} alt={product.name} />
                  <figcaption>{product.name}</figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
      </section>
      <NoveltyContainerClosingWave />
      <FeaturedProductsOpeningWave />
      <section className='featured-products'>
        <h3>Productos más vendidos</h3>
        <ul>
          {
            mostSelledProducts.map((product) => (
              <li key={product.id}>
                <figure>
                  <img src={product.imgURL} alt='' />
                  <figcaption>{product.name}</figcaption>
                </figure>
                <button>Comprar</button>
              </li>
            ))
          }
        </ul>
      </section>
      <FeaturedProductsClosingWave />
    </main>
  )
}
