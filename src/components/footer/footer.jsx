import React from "react";
import { FaFacebook, FaTwitter, FaTelegram } from "react-icons/fa";
import Navegacion from "../navigation/navigation.jsx";
import styled from "@emotion/styled";

const Footer = () => {
  const Footer = styled.footer`
    background-color: #00162b;
    padding: 0;
    margin: 0;
    font-family: "Roboto";
  `;

  const FooterContainer = styled.div`
    max-width: 1800px;
    color: white;
    margin: auto;
    margin-top: 20px;
    padding: 0 20;
    justify-content: space-between;
    text-align: center;
  `;

  const SubTitle = styled.div`
    color: white;
    font-family: "Roboto";
    margin-top: 5%;
    padding-top: 4%;
  `;

  const Social = styled.div`
    margin: 20px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-bottom: 3rem;
  `;

  const ContentLogo = styled.a`
    margin-left: 5%;
  `;

  const Facebook = styled(FaFacebook)`
    height: 50px;
    width: 50px;
    color: white;
  `;

  const Twitter = styled(FaTwitter)`
    height: 50px;
    width: 50px;
    color: white;
  `;

  const Telegram = styled(FaTelegram)`
    height: 50px;
    width: 50px;
    color: white;
  `;

  const CopyRight = styled.p`
    color: white;
    margin-top: 4%;
  `;

  return (
    <Footer id="Nav">
      <FooterContainer className="footer-container">
        <div>
          <SubTitle className="subTitulo">
            <h1>Cardano Latinoamérica</h1>
          </SubTitle>
          <div className="col-izq">
            <Social>
              <a
                href="https://www.facebook.com/groups/576007773070139/"
                target="popup"
              >
                <Facebook />
              </a>
              <ContentLogo href="https://twitter.com/LatamPool" target="popup">
                <Twitter />
              </ContentLogo>
              <ContentLogo
                href="https://t.me/joinchat/NFPHBAvdIx162AoNnibCXg"
                target="popup"
              >
                <Telegram />
              </ContentLogo>
            </Social>
          </div>
          <Navegacion />
          <CopyRight>© 2020 LATAMPOOL</CopyRight>
        </div>
      </FooterContainer>
    </Footer>
  );
};

export default Footer;
