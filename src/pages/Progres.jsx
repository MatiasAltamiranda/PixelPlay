import pixelPortada from "../assets/pixelPortada.png"
import "./Progres.css"


function Progres(){
    return(
        <>
        <section className="contruccion">
            <img className="img-fluid"  src={pixelPortada} alt="Portada PixelPlay"/>
            <h2>Sitio en construccion</h2>
        </section>   
         </>
    )
}

export default Progres;