import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GamesContext from "../../context/games/gamesContext";
import "./searchNav.css";

const SearchNav = () => {
  const { games } = useContext(GamesContext);

  const [isFocused, setIsFocused] = useState(false);
  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [originalGames, setOriginalGames] = useState([]); 

  useEffect(() => {
    if (Array.isArray(games)) {
      setOriginalGames(games); 
    }
  }, [games]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);

    setShouldShowResults(false);
  };

  const handleResultClick = () => {
    setShouldShowResults(true);
  };

  useEffect(() => {
    if (shouldShowResults) {
      setIsFocused(true);
    }
  }, [shouldShowResults]);
  

  const filteredGames = originalGames.filter((game) =>
    game.tittle.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <section className="searchNavBar">
        <input
          type="text"
          placeholder="Buscar juego"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <i className="bi bi-search"></i>

        {isFocused && (
          <div className="searchResults">
            {Array.isArray(filteredGames) && filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <Link
                  className="clearStylesLink"
                  key={game._id}
                  to={`/game/${game.slug}`}
                  onClick={handleResultClick}
                >
                  <article>
                    <img
                      src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${game.coverImage}`}
                      alt=""
                    />
                    <p>{game.tittle}</p>
                  </article>
                </Link>
              ))
            ) : (
              <p>No se encontraron juegos.</p>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default SearchNav;
