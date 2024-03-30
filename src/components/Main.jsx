import { FeaturedProductsClosingWave, FeaturedProductsOpeningWave, NoveltyContainerClosingWave, NoveltyContainerOpeningWave } from './icons'
import './main.css'

export default function Main ({ mostSelledProducts }) {
  return (
    <main className='main'>
      <figure className='main-image-container'>
        <img src='https://politecnicocundinamarca.edu.co/wp-content/uploads/2018/01/hombre-barbudo-joven-casquillo-blanco-que-coloca-panaderia.jpg' alt='Imagen principal de panaderia' />
      </figure>
      <NoveltyContainerOpeningWave />
      <section className='novelty-container'>
        <h3>Novedad</h3>
        <ul className='news-carousel'>
          <li>
            <figure>
              <img src='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f1ec1b78-4db1-45ac-9189-40619b7fad74/Derivates/2c238c6b-e380-486e-b9dc-39e41695a5ba.jpg' alt='Imagen de un pan nuevo' />
              <figcaption>Pan Integral</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f1ec1b78-4db1-45ac-9189-40619b7fad74/Derivates/2c238c6b-e380-486e-b9dc-39e41695a5ba.jpg' alt='Imagen de un pan nuevo' />
              <figcaption>Pan Integral</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f1ec1b78-4db1-45ac-9189-40619b7fad74/Derivates/2c238c6b-e380-486e-b9dc-39e41695a5ba.jpg' alt='Imagen de un pan nuevo' />
              <figcaption>Pan Integral</figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <NoveltyContainerClosingWave />
      <FeaturedProductsOpeningWave />
      <section className='featured-products'>
        <h3>Productos más vendidos</h3>
        {
          mostSelledProducts.map((product) => (
            <article key={product.id}>
              <figure>
                <img src={product.imgURL} alt='' />
                <figcaption>{product.name}</figcaption>
              </figure>
              <button>Comprar</button>
            </article>
          ))
        }
      </section>
      <FeaturedProductsClosingWave />
    </main>
  )
}
