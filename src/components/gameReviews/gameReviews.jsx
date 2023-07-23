import moment from "moment";
import clientAxios from "../../config/axios"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


import "./gameReviews.css";

const GameReviews = (prop) => {
  const { id,reviews } = prop;
  const [rating, setRating] = useState(0);
  const maxStars = 5;
  const logged = JSON.parse(localStorage.getItem("userData"));
  const [formReview, setFormReview] = useState({
    title: "",
    content: "",
    rating: 0,
  });


const resetFormReviews = ()=>{
  setFormReview(
    {
      title: "",
      content: "",
      rating: 0,
    }
  )
}

  const handleRatingChange = (index) => {
    setRating(index + 1);
    setFormReview({ ...formReview, rating: index + 1 });
  };

  const handleOnChange = (e) => {
    setFormReview({ ...formReview, [e.target.name]: e.target.value });
  };



  const reviewPost = async(data) =>{
    try {
        const response = await clientAxios.post(`/api/v1/reviews/${id}`, data);
        return response;
    } catch (error) {
      console.log(error)
       return error;
    }
}

const handleSubmit = (e,id) => {
  e.preventDefault();
  reviewPost(formReview)
  resetFormReviews();
};


  return (
    <>
      <div className="row reviews">
        <h2>Deja tu comentario</h2>
        {logged ? (
          <form className="col-12 formulario-reveiw" onSubmit={handleSubmit}>
            <div className="review-rating">
              {Array.from({ length: maxStars }, (_, index) => (
                <span
                  key={index}
                  onClick={() => handleRatingChange(index)}
                  style={{ cursor: "pointer" }}
                >
                  {index + 1 <= rating ? (
                    <i className="bi bi-star-fill star"></i>
                  ) : (
                    <i className="bi bi-star star"></i>
                  )}
                </span>
              ))}
            </div>

            <div>
              <input  className="input-review" type="text" name="title" onChange={handleOnChange} value={formReview.title} placeholder="Titulo" required minLength="2" maxLength="50" />
            </div>
            <div>
              <textarea className="input-review area" name="content" onChange={handleOnChange} value={formReview.content} placeholder="Comentario..." required minLength="10" maxLength="450"></textarea>
            </div>
            <button className="menu_btn ingresar" type="submit">Comentar</button>
          </form>
        ) : (
          <Link to="/login" className="reviews_singUp">
            Inicia session para dejar tu comentario
          </Link>
        )}
        <h2 className="mb-4">Comentarios</h2>
        {reviews?.map((review) => (
          <div key={review._id} className="col-12">
            <div className="reviews_rating">
              <div className="stars">
                {Array.from({ length: maxStars }, (_, index) => (
                  <i
                    key={index}
                    className={`bi bi-star${
                      index + 1 <= review.rating ? "-fill" : ""
                    }`}
                  ></i>
                ))}
              </div>
              <p>{moment(review.createdAt).format("DD MMM. YY")}</p>
            </div>
            <div className="reviews_info">
              <h3>{review.title}</h3>
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameReviews;
