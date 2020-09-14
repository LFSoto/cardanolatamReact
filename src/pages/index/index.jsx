import React from "react";
import Layout from "../../components/layout/layout";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "@emotion/styled";
import logoBienvenida from "../../images/01_logo_fondoscuro.svg";
import TlgmNoti from "../../components/tlgmMsg/telegramMsg";
import border from "../../images/bordes.png";
import Content1 from "./content1";
import Content2 from "./content2";
import { useTranslation } from "react-i18next";

const Index = () => {
  const IndexContainer = styled.div`
    background-color: #00162b;
    padding: 5% 0% 3% 0%;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    &:first-of-type {
      margin-left: 30%;
    }
  `;

  const IndexLogo = styled.div`
    max-width: 750px;
    margin-top: 0 auto;
    align-items: center;
  `;

  const LogoImg = styled.img`
    margin-top: 8%;
    height: 100%;
    width: 100%;
  `;

  const RankContainer = styled.div`
    align-content: top;
    margin-top: 10%;
    margin-left: 5%;
    display: flex;
    flex-wrap: wrap;
  `;

  const BorderImg = styled.img`
    height: 200px;
    length: 140px;
    display: absolute;
  `;

  const BorderContainer = styled.div`
    margin-top: -58%;
    margin-left: 20%;
  `;

  const CopyClipboard = styled.button`
    background-color: #00162b;
    border: none;
  `;

  const BorderMessage = styled.p`
    margin-top: 10%;
    margin-left: 10%;
    max-width: 300px;
  `;

  const Slogan = styled.div`
    font-size: 30px;
    color: white;
    margin-top: -5rem;
    text-align: center;
    justify-content: space-between;
  `;

  const [t, i18n] = useTranslation("global");

  return (
    <Layout>
      <IndexContainer>
        <IndexLogo>
          <LogoImg src={logoBienvenida} alt="Bienvenida" />
        </IndexLogo>
        <RankContainer>
          <div>
            <div>
              <BorderImg alt="bordes" src={border} />
              <BorderContainer>
                <ul>
                  <li>
                    {t("boder.boder-ticker-label")}
                    <span>{t("boder.boder-ticker-content")}</span>
                  </li>
                  <li>
                    {t("boder.boder-PoolId-label")}
                    <span>
                      <CopyToClipboard text="c922da2949ca73c3300326dc5f9dc4cb39cf6c855ab8256dffdb9289">
                        <CopyClipboard>
                          <span>{t("boder.boder-PoolId-content")}</span>
                        </CopyClipboard>
                      </CopyToClipboard>
                    </span>
                  </li>
                  <li>
                    {t("boder.boder-Pledge-label")}{" "}
                    <span>{t("boder.boder-Pledge-content")}</span>
                  </li>
                  <li>
                    {t("boder.boder-PerComision-label")}{" "}
                    <span> {t("boder.boder-PerComision-content")}</span>
                  </li>
                  <li>
                    {t("boder.boder-FixComision-label")}{" "}
                    <span>{t("boder.boder-FixComision-content")}</span>
                  </li>
                </ul>
              </BorderContainer>
            </div>
            <BorderMessage>
              {t("border-msg.border-message.0")}{" "}
              <span>{t("border-msg.border-message.1")} </span>
              {t("border-msg.border-message.2")}
            </BorderMessage>
          </div>
        </RankContainer>
      </IndexContainer>

      <br />
      <Slogan>
        <i>{t("index.index-slogan")}</i>
      </Slogan>
      <Content1 />
      <Content2 />

      <TlgmNoti />
    </Layout>
  );
};

export default Index;
