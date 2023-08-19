import { Link } from "react-router-dom";

import "./categoriesHome.css";
import gtaPortada from "../../assets/CatMobile/gtavCategories.jpg";
import ffPortada from "../../assets/CatMobile/ffCategories.jpg";
import fifaPortada from "../../assets/CatMobile/FifaCategories.jpeg";
import AgePortada from "../../assets/CatMobile/AgeCategories.jpg";
import zeldaPortada from "../../assets/CatMobile/zeldaCategories.jpg";
import categoriesCharacter from "../../assets/CatMobile/categoriesCharacter.png";

function CategoriesHome() {
  return (
    <>
      <section className="container-fluid mt-5 categories">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="categories_tittle mb-4">CATEGORIAS</h2>
          </div>
          <div className="col-12 col-md-6 col-lg-4 categories_cards_mobile ">
            <div className="text-center categories_card_mobile">
              <img
                className="categories_card_mobile_img"
                src={gtaPortada}
              ></img>
              <Link
                className="categories_card_mobile_text"
                to="/category/accion"
              >
                Acción
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 categories_cards_mobile ">
            <div className="text-center categories_card_mobile">
              <img className="categories_card_mobile_img" src={ffPortada}></img>
              <Link className="categories_card_mobile_text" to="/category/RPG">
                RPG
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 categories_cards_mobile ">
            <div className="text-center categories_card_mobile">
              <img
                className="categories_card_mobile_img"
                src={fifaPortada}
              ></img>
              <Link
                className="categories_card_mobile_text"
                to="/category/deporte"
              >
                Deportes
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 categories_cards_mobile ">
            <div className="text-center categories_card_mobile">
              <img
                className="categories_card_mobile_img"
                src={AgePortada}
              ></img>
              <Link
                className="categories_card_mobile_text"
                to="/category/estrategia"
              >
                Estrategia
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 categories_cards_mobile ">
            <div className="text-center categories_card_mobile">
              <img
                className="categories_card_mobile_img"
                src={zeldaPortada}
              ></img>
              <Link
                className="categories_card_mobile_text"
                to="/category/aventura"
              >
                Aventuras
              </Link>
            </div>
          </div>
        </div>
        <img className="categories_card_pj" src={categoriesCharacter}></img>
      </section>
    </>
  );
}

export default CategoriesHome;
