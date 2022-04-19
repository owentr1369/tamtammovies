const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "30cc1f2f146a0f887c19793e0f90d866",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
// https://api.themoviedb.org/3/movie/popular?api_key=30cc1f2f146a0f887c19793e0f90d866&language=en-US&page=1
export default apiConfig;
