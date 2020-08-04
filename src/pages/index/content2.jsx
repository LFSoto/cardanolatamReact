import React from "react";
import styled from "@emotion/styled";

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

  return (
    <ContentDiv2>
      <h3>
        <span>Beneficios</span>
      </h3>
      <p>
        ¡Empiece a generar <span>ingresos pasivos</span>!
        <br />
        <br />
        <br />
        Nuestro servicio está <span>abierto a TODOS los usuarios</span>, ya sean
        grandes inversores o inversores primerizos.
        <br />
        <br />
        <span>Baja comisión</span> sin comprometer la calidad del nodo.
        <br />
        <br />
        <span>Incentivos extra</span> a nuestros delegadores como sorteos
        mensuales con un porcentaje de las ganancias del nodo. <br /> <br />
        Asociados a una comunidad abierta de usuarios latinoamericanos donde se{" "}
        <span>
          comparten conocimientos, experiencias y las últimas noticias
        </span>{" "}
        sobre CARDANO. <br /> <br />
        Contamos con <span>
          {" "}
          infraestructura tecnológica de alto nivel
        </span>{" "}
        para satisfacer todas la necesidades de nuestro servicio.
      </p>
    </ContentDiv2>
  );
};

export default Content2;
