import React from "react";
import styled from "@emotion/styled";

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

  return (
    <Content1Div>
      <h3>
        <span>100% Latinos</span>
      </h3>
      <p>
        Pool manejado por latinos para latinos <br />
        <br />
        <br />
        Vivimos la situación de latinoamérica y es por ello que tenemos una
        <span> baja tasa de comisión </span> para
        <span> maximizar sus ganancias.</span> <br />
        <br />
        <span>¡UNIDOS SOMOS MÁS FUERTES!</span>
        <br /> Cardano es la perfecta oportunidad para
        <span> respaldar nuestras finanzas.</span> <br />
        <br /> Nuestros canales de comunicación están administrados por latinos
        lo cual garantiza un
        <span> ambiente cultural compatible</span> con nuestra identidad.
      </p>
    </Content1Div>
  );
};

export default Content1;
