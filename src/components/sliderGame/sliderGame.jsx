import { useEffect, useState } from "react";

import "./sliderGame.css";

const SliderGame = (prop) => {
  const { images } = prop;
  const [currentImage, setCurrentImage] = useState( '');

  useEffect(() => {
    if (images && images.length > 0) {
      setCurrentImage(`${import.meta.env.VITE_APP_GAMES_IMAGES}/${images[0]}`);
    }
  }, [images]);


  const handleImageClick = (imageName) => {
    setCurrentImage(imageName);
  };

  return (
    <div>
      <div className="slider-container">
        <img className="main-image" src={currentImage} alt="Main" />
        <div className="thumbnail-container">
          {images?.map((image) => (
            <img
              key={image}
              className={`thumbnail ${
                currentImage ===
                `${import.meta.env.VITE_APP_GAMES_IMAGES}/${image}`
                  ? "active"
                  : ""
              }`}
              src={`${import.meta.env.VITE_APP_GAMES_IMAGES}/${image}`}
              alt={image}
              onClick={() =>
                handleImageClick(
                  `${import.meta.env.VITE_APP_GAMES_IMAGES}/${image}`
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderGame;
