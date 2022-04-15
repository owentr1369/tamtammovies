import React, { useState, useEffect } from "react";
import "./hero-slide.scss";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";

function HeroSlide() {
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      const response = await tmdbApi.getMovieList(movieType.popular, {
        params,
      });
      console.log("response :>> ", response);
      //   setMovieItems(response.results.slice(0, 4));
      //   console.log(response);
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <h1>HeroSlide</h1>
    </div>
  );
}

export default HeroSlide;
