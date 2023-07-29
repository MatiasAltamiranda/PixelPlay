import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GamesContext from "../context/games/gamesContext";
import GameOneTemplate from "../components/GameOneTemplate/GameOneTemplate";
import GameReviews from "../components/gameReviews/gameReviews";




const TemplateGame = ()=>{

    const { slug } = useParams();
    const { getGame, games, loading } = useContext(GamesContext);
  
    useEffect(() => {
      const getGames = async () => {
        try {
          await getGame(slug);
        } catch (error) {
          console.log(error);
        }
      };
  
      getGames();
    }, []);
  

    return(
        <>
            {!loading ? (
              <p>Cargando juego...</p>
            ) : (
            <section className="container one_game">   
              <GameOneTemplate tittle={games.tittle} developer={games.developer} franchise={games.franchise} description={games.description} coverImage={games.coverImage} images={games.images} price={games.price} id={games._id}/>
             <GameReviews reviews={games.reviews} id={games._id}/>
            </section>
            )}
    </>
    )
}

export default TemplateGame;