import { useContext,useEffect } from "react";
import RandomGames from "../components/RandomGames/randomGames";
import Benefits from "../components/benefits/benefits";
import CategoriesHome from "../components/categoriesHome/categoriesHome";
import Hero from "../components/hero/hero"
import News from "../components/news/news";
import AuthContext from "../context/authContext";




function Home(){

    const {isAuth, getUser, token} = useContext(AuthContext)

    useEffect(()=>{
        if(!isAuth && token){
            getUser();
        }
    } , [])

   
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