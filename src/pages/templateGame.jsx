import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GamesContext from "../context/games/gamesContext";
import GameOneTemplate from "../components/GameOneTemplate/GameOneTemplate";
import GameReviews from "../components/gameReviews/gameReviews";
import Spinner from "react-bootstrap/Spinner";

const TemplateGame = () => {
  const { slug } = useParams();
  const { getGame, games, loading } = useContext(GamesContext);
  const [reviews, setReviews] = useState([]); 
  

  useEffect(() => {
    const getGames = async () => {
      try {
        await getGame(slug);
        setReviews(games.reviews); 
        console.log("hola");
      } catch (error) {
        console.log(error);
      }
    };

    getGames();
  }, []);


  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <>
      {!loading ? (
        <section className="spiner_game" style={{ marginTop: "8rem" }}>
          <Spinner className="display-5" animation="border" variant="light" />
          <p className="display-5 text-white">Cargando juego...</p>
        </section>
      ) : (
        <section className="container one_game">
          <GameOneTemplate
            tittle={games.tittle}
            developer={games.developer}
            franchise={games.franchise}
            description={games.description}
            coverImage={games.coverImage}
            images={games.images}
            price={games.price}
            id={games._id}
          />
          <GameReviews reviews={reviews} id={games._id} onReviewAdded={addReview} />
        </section>
      )}
    </>
  );
};

export default TemplateGame;
