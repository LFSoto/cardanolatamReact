import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Content1 = () => {
  const Content1Div = styled.div`
    max-width: 800px;
    text-align: left;
    color: white;
    margin-left: 10%;
    margin-top: 7%;
    @media (max-width: 1050px) {
      margin-right: 10%;
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
    <Content1Div>
      <h3>
        <span>{t("content1.content1-title")}</span>
      </h3>
      <p>
        {t("content1.content1-title-header")}
        <br />
        <br />
        <br />
        {t("content1.content1-p1.0")}
        <span> {t("content1.content1-p1.1")} </span>{" "}
        {t("content1.content1-p1.2")}
        <span> {t("content1.content1-p1.3")}</span> <br />
        <br />
        <span>{t("content1.content1-title2")}</span>
        <br /> {t("content1.content1-p2.0")}
        <span> {t("content1.content1-p2.1")}</span> <br />
        <br /> {t("content1.content1-p2.2")}
        <span> {t("content1.content1-p2.3")}</span>{" "}
        {t("content1.content1-p2.4")}
      </p>
    </Content1Div>
  );
};

export default Content1;
