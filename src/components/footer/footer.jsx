import "./footer.css"
import logo from "../../assets/pixelPortada.png"

function Footer(){

    return(
        <>
        <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#14074c" d="M0,320L1440,224L1440,320L0,320Z"></path></svg>
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
                  <h2 className="footer-tittle">Tu tienda <span>gaming</span></h2>  
                  <p>Lorem ipsum dolor sit amet consectetur <span>adipisicing elit</span>. A sed atque quasi quis minus, nemo numquam tempore maxime est in repellendus nam dignissimos, <span>veritatis facere perspiciatis</span> aut, tempora eligendi placeat.
                 </p>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Footer;