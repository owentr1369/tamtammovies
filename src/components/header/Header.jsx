import React, { useEffect, useRef } from "react";
import "./header.scss";

import Logo from "../../assets/tmovie.png";
import { Link, useLocation } from "react-router-dom";
import { cleanup } from "@testing-library/react";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <Link to="/">TamTamMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
