import React from "react";
import Layout from "../../components/layout/layout";
import styled from "@emotion/styled";

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

  return (
    <Layout>
      <AboutContainer>
        <h3>
          <span>¿Quienes somos?</span>
        </h3>

        <div>
          <p>
            Somos un grupo de <span>jóvenes profesionales</span>, entusiastas
            del proyecto <span>Cardano</span>, que tiene como principal meta
            convertirse en el pool que los latinoamericanos merecen,
            comprometidos a ofrecer un servicio de gran confiabilidad y
            seguridad. <br />
            <br />
            Contamos con un{" "}
            <span>personal de diversas áreas profesionales</span> como manejo de
            servidores, desarrollo web, diseño gráfico, administración de
            negocios y finanzas, todo esto con el fin de abarcar los diferentes{" "}
            <span>puntos de interés</span> que cada uno de nuestros clientes
            pueda tener y poder darles el mejor consejo para responder cualquier
            duda que pueda surgir.
          </p>
        </div>
      </AboutContainer>
    </Layout>
  );
};

export default AboutUs;
