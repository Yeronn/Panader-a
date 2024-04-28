import './productCarousel.css'
export default function ProductCarousel ({ products }) {
  return (
    <ul className='news-carousel'>
      {
            products.map(product => (
              <li key={product.id}>
                <figure>
                  <img src={product.imgURL} alt={product.name} />
                  <figcaption>{product.name}</figcaption>
                </figure>
              </li>
            ))
          }
    </ul>
  )
}
