import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Navegacion from "../navigation/navigation.jsx";
import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa";
import logo from "../../images/03_logo_fondoscuro.svg";
import window from "global";

const Header = () => {
  let previo = window.pageYOffset;
  window.onscroll = () => {
    let actual = window.pageYOffset;
    if (previo > actual) {
      document.getElementById("Nav").style.top = "0";
    } else {
      document.getElementById("Nav").style.top = "-100px";
    }
    previo = actual;
  };

  const Header = styled.header`
    background-color: #00162b;
    padding: 0 100px;
    height: 10rem;
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 2;
    transition: top 0.8s;
    line-height: 80px;
    @media (max-width: 1050px) {
      position: absolute;
      transition: none;
      width: 100%;
    }
  `;

  const Divider = styled.div`
    hr {
      margin-top: -4rem;
      border: 1px solid #40c1d5;
    }
  `;

  const NavContainer = styled.div`
    max-width: 180rem;
    margin-top: 0 auto;
    text-align: center;
    justify-content: space-between;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  `;

  const Logo = styled.img`
    margin-top: 0px;
    margin-left: 20px;
  `;

  const ResponsiveMenu = styled.label`
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
    @media (max-width: 1050px) {
      display: block;
      margin: 0 auto;
    }
  `;

  const CheckLogo = styled.input`
    display: none;
  `;

  const ImgCheck = styled(FaBars)`
    @media (max-width: 1050px) {
      margin-top: 35px;
    }
  `;

  return (
    <Header id="Nav">
      <Divider>
        <NavContainer className="navContainer">
          <Router>
            <NavLink to="/" className="logo">
              <Logo src={logo} alt="Logotipo LATAM" width="175" height="85" />
            </NavLink>
          </Router>
          <Navegacion />
          <ResponsiveMenu id="transicion" htmlFor="check" className="checkbtn">
            <CheckLogo type="checkbox" id="check" />
            <ImgCheck />
          </ResponsiveMenu>
        </NavContainer>
        <hr />
      </Divider>
    </Header>
  );
};

export default Header;
