import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Content2 = () => {
  const ContentDiv2 = styled.div`
    max-width: 1700px;
    text-align: left;
    color: white;
    margin-left: 50%;
    margin-right: 10%;
    margin-top: 10%;
    @media (max-width: 1500px) {
      margin-left: 10%;
      margin-top: 7%;
    }
    h3 {
      font-size: 50px;
    }
    p {
      font-size: 25px;
      line-height: 110%;
    }
  `;

  const [t, i18n] = useTranslation("global");

  return (
    <ContentDiv2>
      <h3>
        <span>{t("content2.content2-title")}</span>
      </h3>
      <p>
        {t("content2.content2-title-header.0")}
        <span>{t("content2.content2-title-header.1")}</span>!
        <br />
        <br />
        <br />
        {t("content2.content2-p1.0")}
        <span>{t("content2.content2-p1.1")}</span>
        {t("content2.content2-p1.2")}
        <br />
        <br />
        <span>{t("content2.content2-p1.3")}</span>
        {t("content2.content2-p1.4")}
        <br />
        <br />
        <span>{t("content2.content2-p2.0")}</span>
        {t("content2.content2-p2.1")}
        <br /> <br />
        {t("content2.content2-p2.2")}
        <span>{t("content2.content2-p2.3")}</span>
        {t("content2.content2-p2.4")}
        <br /> <br />
        {t("content2.content2-p2.5")}
        <span>{t("content2.content2-p2.6")}</span>
        {t("content2.content2-p2.7")}
      </p>
    </ContentDiv2>
  );
};

export default Content2;
