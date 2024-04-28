import './productCatalog.css'
export default function ProductCatalog ({ catalogTitle, products }) {
  return (
    <div className='product-catalog'>
      <h3>{catalogTitle}</h3>
      <ul>
        {
          products.map((product) => (
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
    </div>
  )
}
