import {Link} from "react-router-dom"

import "./cardGame.css";

const CardGame = (prop) => {
  const { tittle, coverImage, description, price,slug } = prop;
  const shortDescription = description.substring(0, 100) + "...";
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
        <div className="cardgame">
            <main>
              <img
                className="cardgame_img"
                src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${coverImage}`}
                alt=""
              />
            </main>
            <footer className="cardgame_footer">
              <h2 className="cardgame_title">{tittle}</h2>
              <p className="cardgame_paragraph">{shortDescription}</p>
              <p className="cardgame_price">
                $<span className="cardgame_price_total">{price}</span>
              </p>
              <Link to={`/game/${slug}`}>
              <button className="menu_btn registro btn_game">Ver detalles</button></Link>
            </footer>
        </div>
      </div>
    </>
  );
};

export default CardGame;
