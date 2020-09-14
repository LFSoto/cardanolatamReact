import React from "react";
import Layout from "../../components/layout/layout";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const ContactDiv = styled.div`
    max-width: 1200px;
    padding: 9% 5% 7% 0%;
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
      <ContactDiv>
        <h3>
          <span>{t("contact.contact-title")}</span>
        </h3>

        <div>
          <p>
            {t("contact.contact-p1.0")}
            <span>{t("contact.contact-p1.1")}</span>.<br />
            {t("contact.contact-p1.2")}
            <a
              href="https://t.me/joinchat/NFPHBAvdIx162AoNnibCXg"
              className="logo"
              target="popup"
            >
              <span>{t("contact.contact-p1.3")}</span>
            </a>
            .
          </p>
        </div>
      </ContactDiv>
    </Layout>
  );
};
export default Contact;
