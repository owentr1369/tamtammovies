import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { Pagination } from "swiper";
import MovieCard from "../movie-card/MovieCard";
import { FreeMode, Navigation, Thumbs } from "swiper";

const MovieList = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movies:
            response = await tmdbApi.getMovieList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.data.results);
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default MovieList;
