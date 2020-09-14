import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Navegacion from "../navigation/navigation.jsx";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

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

  const YouTube = styled(FaYoutube)`
    height: 50px;
    width: 50px;
    color: white;
  `;

  const Instagram = styled(FaInstagram)`
    height: 50px;
    width: 50px;
    color: white;
  `;

  const CopyRight = styled.p`
    color: white;
    margin-top: 4%;
  `;

  const [t, i18n] = useTranslation("global");

  return (
    <Footer id="Nav">
      <FooterContainer className="footer-container">
        <div>
          <SubTitle className="subTitulo">
            <h1>{t("footer.footer-msg")}</h1>
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
              <ContentLogo
                href="https://www.youtube.com/channel/UCZ2IDgLGBIWfEgStGnJxEjw"
                target="popup"
              >
                <YouTube />
              </ContentLogo>
              <ContentLogo
                href="https://www.instagram.com/latampool"
                target="popup"
              >
                <Instagram />
              </ContentLogo>
            </Social>
          </div>
          <Navegacion />
          <CopyRight>{t("footer.footer-copyright")}</CopyRight>
        </div>
      </FooterContainer>
    </Footer>
  );
};

export default Footer;
