import { FacebookIcon, FooterWave, InstagramIcon, PlusIcon } from './icons'
import './footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
      <FooterWave />
      <div className='footer-content'>
        <h2>Sobre nosotros</h2>
        <p>En Artesano encontrarás productos de altacalidad nutricional, 100% naturales, sinconservantes, sin aditivos químicos y libresde azúcar. Creemos con el corazón que todo lo que hacemos no solo brinda sabor y felicidad, sino también salud.</p>
        <section className='footer--section'>
          <hr />
          <p>Ayuda <span><PlusIcon /></span></p>
        </section>
        <section className='footer--section'>
          <hr />
          <p>Contacto <span><PlusIcon /></span></p>
        </section>
        <section className='social-media'>
          <a href='#'><FacebookIcon /></a>
          <a href='#'><InstagramIcon /></a>
        </section>
        <section className='legal-warning'>
          <a href='#'>Términos y condiciones </a>
          <a href='#'>Aviso legal </a>
          <a href='#'>Políticas de privacidad </a>
          <a href='#'>Protección de datos</a>
        </section>
      </div>
    </footer>
  )
}
