import './breadCatalog.css'
import { HeartIcon } from './icons'
import { useGetPageData } from '../hooks/useGetPageData'
import { useFilterProducts } from '../hooks/useFilterProducts'
import StaggeredCard from './StaggeredCard'

export default function BreadCatalog () {
  const { section, season } = useGetPageData()
  const { filteredProducts } = useFilterProducts({ section, season })

  return (
    <section className='bread-catalog'>
      <img src='https://images.pexels.com/photos/4397272/pexels-photo-4397272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen de un pan' />
      <h2>Elige tus favoritos</h2>
      <span> <HeartIcon /> </span>
      <div className='staggered-product-cards'>
        {filteredProducts.map((product, index) => (
          <StaggeredCard key={product.id} product={product} position={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </section>
  )
}
