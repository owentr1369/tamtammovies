import { type } from "@testing-library/user-event/dist/type";
import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";

export const category = {
  movie: "movies",
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
    // const url = `${apiConfig.baseUrl}movie/${movieType[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=1`;
    // "movie/" + movieType[type];
    // const resData = axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response.data.results);
    //     return response.data.results;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // return resData;
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
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
