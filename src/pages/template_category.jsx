import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GamesContext from "../context/games/gamesContext";
import CardGame from "../components/cardGame/cardGame";

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
      <div className="container games_category mb-5">
        <div className="row">
            {!loading ? (
              <p>Cargando juegos...</p>
            ) :  (
              Array.isArray(games) && games.length > 0 ? (
                games.map((game) => (
                  <CardGame key={game._id} tittle={game.tittle} coverImage={game.coverImage} description={game.description} price={game.price} slug={game.slug} />
                ))
              ) : (
                <p>No se encontraron juegos.</p>)
            )}
        </div>
      </div>
    </>
  );
};

export default Category_template;
