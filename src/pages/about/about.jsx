import React from "react";
import Layout from "../../components/layout/layout";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const AboutContainer = styled.div`
    max-width: 1200px;
    padding: 9% 5% 0% 0%;
    color: white;
    li {
      margin-left: 15%;
      margin-top: 5%;
    }
    h3 {
      font-size: 30px;
      margin-bottom: 5%;
      margin-left: 15%;
    }
    p {
      font-size: 20px;
      line-height: 120%;
      text-align: left;
    }
    a {
      text-decoration: none;
    }
    @media (max-width: 1050px) {
      margin-top: 5%;
      margin-right: 10%;
      margin-left: 10%;
    }
    div {
      max-width: 800px;
      margin: auto;
    }
  `;

  const [t, i18n] = useTranslation("global");

  return (
    <Layout>
      <AboutContainer>
        <h3>
          <span>{t("about.about-title")}</span>
        </h3>

        <div>
          <p>
            {t("about.about-p1.0")}
            <span>{t("about.about-p1.1")}</span>
            {t("about.about-p1.2")}
            <span>{t("about.about-p1.3")}</span>
            {t("about.about-p1.4")} <br />
            <br />
            {t("about.about-p2.0")}
            <span>{t("about.about-p2.1")}</span> {t("about.about-p2.2")}
            <span>{t("about.about-p2.3")}</span> {t("about.about-p2.4")}
          </p>
        </div>
      </AboutContainer>
    </Layout>
  );
};

export default AboutUs;
