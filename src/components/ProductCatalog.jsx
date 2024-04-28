import { useParams } from 'react-router-dom'
import './productCatalog.css'
export default function ProductCatalog ({ catalogTitle, products }) {
  const { typeProducts } = useParams()
  const title = catalogTitle ?? typeProducts ?? 'Todo'
  // TODO:Hacer funcion que extraiga solos los productos que el parametro indique
  // Anotaciones: creo que toca quitar el products por prop, entonces para el catalogo
  //              del home, es decir de los prodcutos mas vendidos, se puede hacer que
  //              cuando esté en la direccion raíz extraiga los mas vendidos
  return (
    <div className='product-catalog'>
      <h3>{title}</h3>
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
