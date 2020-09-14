import React from "react";
import Layout from "../../components/layout/layout";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const FaqsDiv = styled.div`
    max-width: 1200px;
    padding: 6% 5% 6% 0;
    color: white;
    li {
      margin-left: 15%;
      margin-top: 5%;
    }
    h3 {
      font-size: 30px;
      margin-bottom: 5%;
    }
    p {
      font-size: 20px;
      line-height: 110%;
    }
    a {
      text-decoration: none;
    }
    @media (max-width: 1050px) {
      margin-right: 10%;
    }
  `;

  const [t, i18n] = useTranslation("global");

  return (
    <Layout>
      <FaqsDiv>
        <ul>
          <li>
            <h3>
              <span>{t("faqs.faq1-title")}</span>
            </h3>
            <p>
              {t("faqs.faq1.0")}
              <span> {t("faqs.faq1.1")} </span> {t("faqs.faq1.1")}{" "}
              <span>{t("faqs.faq1.2")}</span>
              {t("faqs.faq1.3")}
            </p>
          </li>
          <li>
            <h3>
              <span>{t("faqs.faq2-title")}</span>
            </h3>
            <p>
              {t("faqs.faq2.0")}
              <span> {t("faqs.faq2.1")} </span>
              {t("faqs.faq2.2")}
              <span>{t("faqs.faq2.3")}</span>
              {t("faqs.faq2.4")}
              <span>{t("faqs.faq2.5")}</span>
              {t("faqs.faq2.6")}
            </p>
          </li>
          <li>
            <h3>
              <span>{t("faqs.faq3-title")}</span>
            </h3>
            <p>
              {t("faqs.faq3.0")}
              <span>{t("faqs.faq3.1")}</span>
              {t("faqs.faq3.2")}
              <span>{t("faqs.faq3.3")}</span>
              {t("faqs.faq3.4")} <span>{t("faqs.faq3.5")}</span>
              {t("faqs.faq3.6")}
            </p>
          </li>
          <li>
            <h3>
              <span>{t("faqs.faq4-title")}</span>
            </h3>
            <p>
              {t("faqs.faq4.0")}
              <span>{t("faqs.faq4.1")}</span>
              {t("faqs.faq4.2")}
              <span>{t("faqs.faq4.3")}</span>
              {t("faqs.faq4.4")}
            </p>
          </li>
          <li>
            <h3>
              <span>{t("faqs.faq5-title")}</span>
            </h3>
            <p>
              {t("faqs.faq5.0")}
              <a
                href="https://testnets.cardano.org/en/shelley/tools/staking-calculator/"
                target="popup"
              >
                <span>{t("faqs.faq5.1")}</span>
              </a>
            </p>
          </li>
        </ul>
      </FaqsDiv>
    </Layout>
  );
};

export default Faqs;
