import heroImage from "../../assets/heroImage.png"
import logo from "../../assets/pixelPortada.png"
import "./hero.css"

function Hero(){
    return(
        <>
        <section className="hero">
            <img className="hero_image" src={heroImage} alt="Hero image"/>
            <div className="logo">
            <img className="hero_logo" src={logo} alt="Logo"/>
            </div>
        </section>
         </>
    )
}

export default Hero;