import RandomGames from "../components/RandomGames/randomGames";
import Benefits from "../components/benefits/benefits";
import CategoriesHome from "../components/categoriesHome/categoriesHome";
import Hero from "../components/hero/hero"
import News from "../components/news/news";


function Home(){
    return(
        <>
            <Hero/>
            <Benefits/>
            <CategoriesHome/>
            <RandomGames/>
            <News/>
         </>
    )
}

export default Home;