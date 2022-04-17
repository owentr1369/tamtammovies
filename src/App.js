import "./App.scss";
// import "swiper";
import "./assets/boxicons-2.0.9/css/boxicons.min.css";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import RoutesConfig from "./config/Routes";

function App() {
  return (
    <>
      <Header />
      <RoutesConfig />;
      <Footer />
    </>
  );
}

export default App;
