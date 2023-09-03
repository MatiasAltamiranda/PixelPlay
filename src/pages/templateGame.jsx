import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GamesContext from "../context/games/gamesContext";
import GameOneTemplate from "../components/GameOneTemplate/GameOneTemplate";
import GameReviews from "../components/gameReviews/gameReviews";
import Spinner from "react-bootstrap/Spinner";




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
               <section className="LoadingGames d-flex flex-column align-items-center text-white" style={{marginTop:"8rem"}}>
               <Spinner className="display-5" animation="border" variant="light" />
               <p className="display-5">Cargando datos</p>
             </section>
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