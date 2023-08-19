import { useContext, useEffect, useState } from "react";
import "./randomgames.css";
import GamesContext from "../../context/games/gamesContext";
import { Link } from "react-router-dom";

const RandomGames = () => {
  const { getGames, games, loading } = useContext(GamesContext);

  useEffect(() => {
    getGames();
  }, []); 

  return (
    <section className="random_games">
      <h2>Random Games</h2>
      <p>Encuentra tu próxima aventura sin preocuparte</p>
      <section className="random_games_list">
        {Array.isArray(games) ? (
          games.map((game) => (
            <Link
              className="random_games_list_link"
              key={game._id}
              to={`/game/${game.slug}`}
            >
              <article className="random_games_list_item">
                <img
                  className="cardgame_img"
                  src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${
                    game.coverImage
                  }`}
                  alt=""
                />
                <p>{game.tittle}</p>
              </article>
            </Link>
          ))
        ) : (
          <p>No se encontraron juegos.</p>
        )}
      </section>
    </section>
  );
};

export default RandomGames;
