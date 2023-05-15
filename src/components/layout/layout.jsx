import Footer from "../footer/footer"
import NavBar from "../navbar/navbar"

function Layout (prop) {

    const {children} = prop

    return(
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}


export default Layout