import "./css/notfound.css";
import error404 from "../assets/error404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="error">
        <div className="error-text">
          <h1>Error 404: Página no encontrada</h1>
          <p>¡Parece que te perdiste!</p>
        </div>
        <img className="error_img" src={error404} alt="dsad" />
       <Link to="/"><button className="menu_btn registro">Volver</button></Link> 
      </section>
    </>
  );
};

export default NotFound;
