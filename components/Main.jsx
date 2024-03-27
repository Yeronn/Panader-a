import { FeaturedProductsClosingWave, FeaturedProductsOpeningWave, NoveltyContainerClosingWave, NoveltyContainerOpeningWave } from './icons'
import './main.css'

export default function Main () {
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
        <h3>Destacados</h3>
        <article>
          <figure>
            <img src='https://www.clara.es/medio/2018/12/13/postres-saludables-crema-vainilla-chocolate-sin-gluten-lactosa-huevo_4b8ca87e_1000x1000.jpg' alt='' />
            <figcaption>Postre</figcaption>
          </figure>
          <button>Comprar</button>
        </article>
        <article>
          <figure>
            <img src='https://www.cuerpomente.com/medio/2021/02/15/pd-6_d49c03a5_1200x1200.jpg' alt='' />
            <figcaption>Postre</figcaption>
          </figure>
          <button>Comprar</button>
        </article>
        <article>
          <figure>
            <img src='https://vainillamolina.com/uploads/images/Vainilla-Molina-Postres-Saludables-1.jpg' alt='' />
            <figcaption>Postre</figcaption>
          </figure>
          <button>Comprar</button>
        </article>
        <article>
          <figure>
            <img src='https://cdn7.kiwilimon.com/ss_secreto/3310/640x640/3310.jpg.webp' alt='' />
            <figcaption>Postre</figcaption>
          </figure>
          <button>Comprar</button>
        </article>
      </section>
      <FeaturedProductsClosingWave />
    </main>
  )
}
