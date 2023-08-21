import { useContext } from "react";
import "./css/checkout.css";
import GamesContext from "../context/games/gamesContext";
import AuthContext from "../context/authContext";

import CreditCard from "../components/creditCard/creditCard";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { userCart } = useContext(GamesContext);

  const calculateTotalPrice = () => {
    const totalPrice = userCart.reduce(
      (total, cart) => total + cart.game.price,
      0
    );
    return totalPrice;
  };

  return (
    <>
      <section className="container checkout">
        <div className="row">
          <div className="col-12 col-md-7 ">
            <div className="checkout_info w-75">
              <h2 className="fw-light">Informacion del usuario</h2>
              <section className="checkout-info-user">
                <div className="d-flex">
                  <div className="div">
                    <label className="lead">Nombre</label>
                    <input
                      type="text"
                      placeholder="Ingresa tu correo"
                      value={user.name}
                      readOnly
                    />
                  </div>
                  <div className="div">
                    <label className="lead">Apellido</label>
                    <input
                      type="text"
                      placeholder="Ingresa tu correo"
                      value={user.lastname}
                      readOnly
                    />
                  </div>
                </div>
                <div className="div">
                  <label className="lead">E-mail</label>
                  <input
                    type="text"
                    placeholder="Ingresa tu correo"
                    value={user.email}
                    readOnly
                  />
                </div>
              </section>
            </div>
            <div className="checkout_purchase w-75">
              <h2 className="fw-light">Informacion del pago</h2>
              <CreditCard />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <h2 className="fw-light">Detalle del pago</h2>
            
            {userCart.map((cart) => (
              <div key={cart.game._id} className="checkout_detail_cart">
                <img
                  className="checkout_detail_cart"
                  src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${
                    cart.game.coverImage
                  }`}
                  alt="producto"
                />
                <p>{cart.game.tittle}</p>
                <p>
                  <span>$</span>
                  {cart.game.price}
                </p>
              </div>
            ))}
            <div className="checkout_detail_total d-flex justify-content-between align-items-center">
              <h2>Total</h2>
              <p className="fs-2">
                <span>$</span>
                {calculateTotalPrice()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
