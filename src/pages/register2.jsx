import { useState } from "react";

import reina from "../assets/registro/reyna.png";
import kj from "../assets/registro/kj.png";
import "./css/formularios.css";

const Registro = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    let inputValue = event.target.value.slice(0, 12); 
    inputValue = Math.max(0, inputValue);
    setValue(inputValue);
  };
  return (
    <>
      <div className="section_formulario">
        <form className="formulario">
          <h2>CREA UNA CUENTA</h2>
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
              type="number"
              name=""
              placeholder="Numero de telefono"
              maxLength="4"
              onChange={handleChange}
              value={value}
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
        <img className="img-character" src={reina} alt="Reina" />
        <img className="img-character-two" src={kj} alt="kj" />
      </div>
    </>
  );
};

export default Registro;
