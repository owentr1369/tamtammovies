import React, { useState, useEffect, useRef } from "react";
import "./hero-slide.scss";
import { Pagination, Navigation, Autoplay } from "swiper";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import "swiper/css/bundle";
import Button, { OutlineButton } from "../button/Button";
import { useNavigate } from "react-router-dom";
import TrailerModal from "./TrailerModal";

function HeroSlide() {
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
        setMovieItems(response.data.results.slice(0, 4));
      } catch {
        console.log("error2");
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="hero-slide">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem
                  item={item}
                  className={`${isActive ? "active" : ""}`}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {movieItems.map((item, i) => (
          <TrailerModal key={i} item={item} />
        ))}
      </div>
    </>
  );
}
const HeroSlideItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;

  const background = apiConfig.orginalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.data.results.length >= 0) {
      const videoSrc =
        "https://www.youtube.com/embed/" + videos.data.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }
    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)}></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
