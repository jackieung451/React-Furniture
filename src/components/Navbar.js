import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import "../styles.css";
import { i18n } from "../translations/i18n";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: bold;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30rem;

  @media screen and (min-width: 1024px) {
    padding-right: 24rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const Lingo = styled.div`
  display: flex;
  justify-content: space-between
    max-width: 8000px;

   

    @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
    display: none;
  }
  `;

  const Lang1 = styled.div`
    padding-right: 5px;
  `;
  const Lang2 = styled.div`
    padding-left: 5px;
  `;

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#264348" : "transparent",
    transition: "0.4s",
  };

  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Nav style={style}>
      <Logo to="/">La Nayarit Furniture</Logo>

      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
      <Lingo>
        <Lang1>
          <button className="Button" value="en" onClick={handleOnclick}>
            English
          </button>
        </Lang1>
        <Lang2>
          <button className="Button" value="es" onClick={handleOnclick}>
            Spanish
          </button>
        </Lang2>
      </Lingo>
    </Nav>
  );
};

export default Navbar;
