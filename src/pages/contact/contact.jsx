import React from "react";
import Layout from "../../components/layout/layout";
import styled from "@emotion/styled";

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

  return (
    <Layout>
      <ContactDiv>
        <h3>
          <span>Contáctanos</span>
        </h3>

        <div>
          <p>
            Para más informacion, por favor contáctanos al correo{" "}
            <span>cardanolatam@gmail.com</span>.<br />
            Te invitamos a unirte a nuestro grupo de{" "}
            <a
              href="https://t.me/joinchat/NFPHBAvdIx162AoNnibCXg"
              className="logo"
              target="popup"
            >
              <span>Telegram</span>
            </a>
            .
          </p>
        </div>
      </ContactDiv>
    </Layout>
  );
};
export default Contact;
