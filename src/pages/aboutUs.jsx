import {Link} from "react-router-dom"
import "./css/aboutUs.css";
import logo from "../assets/pixelPortada.png";

const AboutUs = () => {
  return (
    <>
      <section className="container-fluid about">
        <section className="about_pixel">
          <figure>
            <img className="about_img" src={logo} alt="Logo pixelplay" />
          </figure>
          <p className="about_paragraph">
            Bienvenidos a PixelPlay, tu destino definitivo para adquirir juegos
            digitales de manera rápida, segura y emocionante.
          </p>
          <Link to="/register" className="about_pixel_button">
          <button>FORMA PARTE</button>
          </Link>
        </section>
        <section className="about_our_mission">
            <div className="about_mission">
                <h2 className="text-center about_subtitle">Nuestra misión</h2>
                <p className="about_paragraph text-center">En PixelPlay, nos apasiona el mundo de los videojuegos tanto como a vos. Nuestra misión es proporcionarte una plataforma confiable donde puedas explorar y adquirir los últimos títulos, descubrir joyas ocultas y conectarte con otros jugadores apasionados. Creemos que los juegos no son solo una forma de entretenimiento, sino una manera de sumergirse en mundos creativos, desafiar límites y forjar amistades duraderas en comunidades en línea.</p>
                </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
