import { useContext, useState, useEffect } from "react";
import "./css/cart.css";
import GamesContext from "../context/games/gamesContext";
import Swal from "sweetalert2"
import { Link } from "react-router-dom";



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
    Swal.fire({
  title: 'Quitaras el juego del carrito',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Quitar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    deleteItemCartUser(id);
    
    Swal.fire({
      title: 'El juego fue removido con exito!',
      icon: 'success',
      showConfirmButton: false, 
      timer: 2000
    });
  }
})
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
            <Link to="/checkout"><button className="menu_btn registro go-purchase">
              Ir a pagar
            </button></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
