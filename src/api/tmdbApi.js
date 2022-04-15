import { type } from "@testing-library/user-event/dist/type";
import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";
export const category = {
  movie: "movie",
  tv: "tv",
};

const axios = require("axios");
export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = "movie/" + movieType[type];
    // Remind me to fix this url
    const hardUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=30cc1f2f146a0f887c19793e0f90d866&language=en-US&page=1";
    const resData = axios
      .get(hardUrl)
      .then((response) => {
        return response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
    return resData;
    // return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
