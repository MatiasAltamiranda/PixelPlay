import "./footer.css"
import logo from "../../assets/pixelPortada.png"

function Footer(){

    return(
        <>
        <section className="container-fluid footer">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 footer-logo text-center">
                  <img className="img-fluid" src={logo} />
                  <p className="text-center text-logo">Todos tus juegos en<span> un solo lugar</span></p>
                </div>
                <div className="col-12  col-md-6 col-lg-4 text-center">
                  <h2 className="text-center footer-tittle">Menu</h2>
                  <ul >
                    <li>Inicio</li>
                    <li>Sobre nosotros</li>
                    <li>Contacto</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4 text-center footer-text">
                  <h2 className="footer-tittle">Solo<span> PIXELPLAY</span></h2>  
                  <p>Explora un mundo de diversión y emoción en <span>PixelPlay</span>. Somos tu tienda de videojuegos en línea, dedicados a brindarte los mejores títulos y experiencias. ¡<span>Únete</span>  a la comunidad de jugadores apasionados en PixelPlay!
                 </p>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Footer;