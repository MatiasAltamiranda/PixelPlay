import "./css/register.css";
import logo from "../assets/pixelPortada.png"

const Registro = () => {
  return (
    <>
      <div className="container-fluid contenedor">
        <div className="row">
          <div className="col-12 col-lg-6  col-xl-7 col-xxl-7 contenedor_logo">
            <img className="logoPixel" src={logo} 
            alt="Logo PixelPlay"/>
            <h2 className="text-light text-center contenedor_logo_text">FORMA PARTE DE ESTA COMUNIDAD</h2>
          </div>
          <div className="col-12  col-lg-4  col-xl-4 col-xxl-3 section_formulario">
            <div className="section_formulario">
              <form className="formulario">
                <h2>REGISTRATE EN PIXEL</h2>
                <p>¡ Es gratis !</p>
                <div className="formulario_group">
                  <input
                    type="text"
                    name=""
                    placeholder="Nombre"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="text"
                    name=""
                    placeholder="Apellido"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="email"
                    name=""
                    placeholder="Correo electronico"
                    minLength="4"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="password"
                    name=""
                    placeholder="Contraseña"
                    minLength="8"
                    maxLength="30"
                    required
                  />
                </div>
                <div className="formulario_group">
                  <input
                    type="password"
                    name=""
                    placeholder="Confirmar contraseña"
                    minLength="8"
                    maxLength="30"
                    required
                  />
                </div>
                <button type="submit">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
