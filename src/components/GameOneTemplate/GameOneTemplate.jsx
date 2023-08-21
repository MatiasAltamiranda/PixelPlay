import "./GameOneTemplate.css";
import SliderGame from "../sliderGame/sliderGame";
import { useContext } from "react";
import GamesContext from "../../context/games/gamesContext";
import Swal from "sweetalert2"

const GameOneTemplate = (prop) => {
  const { tittle, developer, franchise, description, coverImage, images, price,id } =
    prop;

  const {addGameCart} = useContext(GamesContext)

  const logged = JSON.parse(localStorage.getItem("userData"));


  
  const addCart = async (id) => {
    try {
      const response = await addGameCart(id);
      if(response.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'Juego añadido al carrito',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          icon: 'warning',
          title: "El juego ya se encuentra en el carrito",
          showConfirmButton: false,
          timer: 1500
        });
      }
        
    } catch (error) {
      return error; 
    }
  };

  return (
    <>
      <div className="game_info row">
        <div className="game_info_description col-12 col-lg-6">
          <h2 className="game_info_title">{tittle}</h2>
          <figure className="game_img">
            <img
              className="game_info_img"
              src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${coverImage}`}
              alt=""
            />
          </figure>
          <div className="game_info_plus">
            <p>
              Desarrollador : <span>{developer}</span>
            </p>
            <p>
              Franquicia : <span>{franchise}</span>
            </p>
            <p>{description}</p>
          </div>
        </div>
        <div className="game_info_images col-12 col-lg-6">
          <SliderGame images={images} />
        </div>
      
        <div className="purchase">
        <div className="purchase_price">
                <p>${price}</p>
            </div>
          {logged? ( <button onClick={()=>addCart(id)} className="menu_btn ingresar">Agregar al carrito</button>) : (<></>)}
           
           
      </div>
      </div>
    
    </>
  );
};

export default GameOneTemplate;
