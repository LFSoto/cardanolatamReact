import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

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

const Navigation = () => {
  return (
    <Rou>
      <NvLink to={"/"} activeClassName="pagina-actual">
        Inicio
      </NvLink>
      <NvLink to={"/about"} activeClassName="pagina-actual">
        Sobre nosotros
      </NvLink>
      <NvLink to={"/faqs"} activeClassName="pagina-actual">
        Preguntas frecuentes
      </NvLink>
      <NvLink to={"/contact"} activeClassName="pagina-actual">
        Contáctanos
      </NvLink>
    </Rou>
  );
};

export default Navigation;
