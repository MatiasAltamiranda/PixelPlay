import { useContext, useState } from "react";
import "./creditCard.css";

const CreditCard = () => {
  const [formCard, setFormCard] = useState({
    cardNumber: "",
    cardName: "",
    monthCard: "",
    yearCard: "",
  });

  const { cardNumber, cardName, monthCard, yearCard } = formCard;

  const handleOnChangeForm = (e) => {
    setFormCard({ ...formCard, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="creditcard-pruchase">
        <div className="creditcard">
          <div className="creditcard-chip-brand">
            <img
              className="creditcard-chip"
              src="https://cdn.freebiesupply.com/logos/large/2x/chip-1-logo-png-transparent.png"
              alt=""
            />
            <img
              className="creditcard-brand"
              src="https://uplightiluminacion.com/wp-content/uploads/2020/09/tarjetascredito.png"
            />
          </div>
          <div className="form-credit-card">
            <div>
              <input
                className="credit-card-hash"
                type="text"
                name="cardNumber"
                placeholder="• • • •   • • • •   • • • •   • • • •"
                value={cardNumber}
                readOnly
              />
              <input
                className=""
                type="text"
                name="userName"
                placeholder="TU NOMBRE AQUI"
                value={cardName.toUpperCase()}
                readOnly
              />
              <div className="d-flex date-card">
                <input
                  className="form-date"
                  type="text"
                  name="monthCard"
                  placeholder="• •"
                  value={monthCard}
                  readOnly
                />
                <span>/</span>
                <input
                  className="form-date"
                  type="text"
                  name="yearCard"
                  placeholder="• •"
                  value={yearCard}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <form className="form-card">
          <div>
            <label className="fs-5">Numero de tarjeta</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Ingrese el numero de su tarjeta respetando los espacios"
              value={cardNumber}
              onChange={handleOnChangeForm}
              required
              maxLength="19"
              minLength="19"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="fs-5">Nombre completo</label>
            <input
              type="text"
              name="cardName"
              placeholder="Ingrese el nombre como figura en su tarjeta"
              value={cardName}
              onChange={handleOnChangeForm}
              required
              minLength="8"
              maxLength="30"
              autoComplete="off"
            />
          </div>
          <div className="form-date-venc">
            <label className="fs-5">Fecha de vencimiento de la tarjeta</label>
            <br/>
            <select className="form-card-date" name="monthCard" value={monthCard}   onChange={handleOnChangeForm} required>
            <option value="" disabled>Mes</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select className="form-card-date" name="yearCard" value={yearCard}   onChange={handleOnChangeForm} required>
            <option  value="" disabled >Año</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
            </select>
          </div>
          <div>
            <label className="fs-5 mt-3">Codigo seguridad de la tarjeta</label>
            <input
              type="password"
              name="codCard"
              className="form-card-date"
              placeholder="Ingrese el codigo"
              maxLength="3"
              minLength="3"
              required
            />
          </div>
          <button className="menu_btn registro">COMPRAR</button>
        </form>
      </section>
    </>
  );
};

export default CreditCard;
