import { useContext, useState, useEffect } from "react";
import "./css/cart.css";
import GamesContext from "../context/games/gamesContext";

const Cart = () => {
  const { getCartUser, deleteItemCartUser } = useContext(GamesContext);
  const [cartUser, setCartUser] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // 

  const getCartByUser = async () => {
    try {
      const response = await getCartUser();
      setCartUser(response.data.carrito);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const deleteItemCart = async (id) => {
    const response = await deleteItemCartUser(id);
    return response;
  };

 
  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((acc, cart) => acc + cart.game.price, 0);
    return total;
  };

  useEffect(() => {
    getCartByUser();
  }, [deleteItemCart]);


  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cartUser));
  }, [cartUser]);

  return (
    <>
      <section className="cart-section container-fluid">
        <div className="row cards-cart">
            <div className="col-12 col-lg-8">
          {cartUser.length === 0 ? (
            <h3 className="text-center text-light mt-5 mb-5">El carrito está vacío</h3>
          ) : (
            cartUser.map((cart) => (
              <div key={cart._id} className="col-12">
                <div className="card-cart">
                  <img
                    src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${
                      cart.game.coverImage
                    }`}
                    alt="producto"
                  />
                  <div className="card-info">
                    <p>{cart.game.tittle}</p>
                    <p>
                      <span>$</span>
                      {cart.game.price}
                    </p>
                    <button
                      onClick={() => deleteItemCart(cart.game._id)}
                      className="btn btn-danger"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          </div>

          <div className="col-12 col-lg-4 section-purchase">
            <h3>Resumen de la compra</h3>
            <div className="info-purchase">
              <p className="me-3">Total</p>
              <p>
                <span>$</span>
                {totalPrice} 
              </p>
            </div>
            <button className="menu_btn registro go-purchase">
              Ir a pagar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
