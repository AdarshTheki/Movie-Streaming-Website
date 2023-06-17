import React, { useEffect, useState } from "react";
import logo from "../assets/netflix_logo.png";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={logo} className='nav__logo' width='100' alt='netflix' />
      {/* <img src={logo} className='nav__logo' width='100' alt='netflix' /> */}
    </div>
  );
};

export default Nav;
