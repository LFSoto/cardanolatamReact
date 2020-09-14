import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const Rou = styled.nav`
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-bottom: 3rem;
    top: 80px;
    @media (max-width: 1050px) {
      position: fixed;
      background: #2c3e50;
      width: 100%;
      height: 100vh;
      top: 100px;
      left: -100%;
      transition: all 0.5s;
      text-align: center;
    }
  `;
  const NvLink = styled(NavLink)`
    color: white;
    font-weight: 700;
    font-size: 20px;
    font-family: "PT Sans", sans-serif;
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 2rem;
    transition: color 0.4s;
    &:last-of-type {
      margin-right: 0;
    }
    &.pagina-actual {
      color: #40c1d5;
    }
    @media (max-width: 1050px) {
      display: block;
      font-size: 20px;
    }
  `;
  const [t, i18n] = useTranslation("global");

  return (
    <Rou>
      <NvLink exact to={"/"} activeClassName="pagina-actual">
        {t("navigation.nav-home")}
      </NvLink>
      <NvLink exact to={"/about"} activeClassName="pagina-actual">
        {t("navigation.nav-about")}
      </NvLink>
      <NvLink exact to={"/faqs"} activeClassName="pagina-actual">
        {t("navigation.nav-faqs")}
      </NvLink>
      <NvLink exact to={"/contact"} activeClassName="pagina-actual">
        {t("navigation.nav-contact")}
      </NvLink>
    </Rou>
  );
};

export default Navigation;
