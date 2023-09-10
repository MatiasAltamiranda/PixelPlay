import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GamesContext from "../context/games/gamesContext";
import CardGame from "../components/cardGame/cardGame";
import Spinner from "react-bootstrap/Spinner";
import "./css/templatecategory.css"

const Category_template = () => {
  const { category } = useParams();
  const { getGamesCategory, games, loading } = useContext(GamesContext);

  useEffect(() => {
    const getGames = async () => {
      try {
        await getGamesCategory(category);
      } catch (error) {
        console.log(error);
      }
    };

    getGames();
  }, [category]);

  return (
    <>
      <div className="container games_category">
        <div className="row">
          {loading ? (
            <section className="spiner_game">
              <Spinner
                className="display-5"
                animation="border"
                variant="light"
              />
              <p className="display-5 text-white">Cargando juegos...</p>
            </section>
          ) : Array.isArray(games) && games.length > 0 ? (
            games.map((game) => (
              <CardGame
                key={game._id}
                tittle={game.tittle}
                coverImage={game.coverImage}
                description={game.description}
                price={game.price}
                slug={game.slug}
              />
            ))
          ) : (
            <p>No se encontraron juegos.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Category_template;
