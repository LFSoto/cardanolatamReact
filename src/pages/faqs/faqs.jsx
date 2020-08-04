import React from "react";
import Layout from "../../components/layout/layout";
import styled from "@emotion/styled";

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

  return (
    <Layout>
      <FaqsDiv>
        <ul>
          <li>
            <h3>
              <span>¿Qué es un pool de minería?</span>
            </h3>
            <p>
              Un pool es una{" "}
              <span> computadora encargada de verificar transacciones </span> de
              la red Cardano. Como Cardano es una red descentralizada todos los
              pools <span>compiten</span> unos contra otros por ser el encargado
              de validar las transacciones.
            </p>
          </li>
          <li>
            <h3>
              <span>¿Qué es minar ADAs?</span>
            </h3>
            <p>
              Para que la red Cardano funcione se necesitan computadoras que
              <span> validen las transacciones </span>, a este proceso se le
              denomina minería. A la computadora que logre validar transacciones
              se le <span>recompensa con incentivos en ADAs</span>. El protocolo
              de Cardano asigna a un pool como el encargado de minar una
              transacción por medio de una lotería donde las probabilidades de
              ganar{" "}
              <span>
                dependen del monto total de ADAs que tenga el pool en stake
              </span>
              , es decir al monto de ADAs que tenga delegadas.
            </p>
          </li>
          <li>
            <h3>
              <span>¿Qué es hacer staking?</span>
            </h3>
            <p>
              Staking es una forma de <span>delegar confianza</span> a un pool
              de Cardano para que este tenga{" "}
              <span>mayores probabilidades de minar transacciones</span>.
              Delegar esta confianza tiene <span>recompensas</span> en modo de
              ingresos pasivos que se generan a partir de las ganancias que
              tiene el pool minando ADAs.
            </p>
          </li>
          <li>
            <h3>
              <span>¿Cuántas ganancias puedo obtener?</span>
            </h3>
            <p>
              La cantidad de ingresos pasivos dependerá de{" "}
              <span>cuántas ADAs delegues </span> y de cuánto{" "}
              <span>
                porcentaje de ganancias que el pool está dispuesto a repartir
              </span>{" "}
              entre sus delegadores. Para nuestro pool la ganancia esperada es
              del TBD.
            </p>
          </li>
          <li>
            <h3>
              <span>Calcular tus ganacias </span>
            </h3>
            <p>
              Calcula tus ganancias con Cardano{" "}
              <a
                href="https://testnets.cardano.org/en/shelley/tools/staking-calculator/"
                target="popup"
              >
                <span>aquí.</span>
              </a>
            </p>
          </li>
        </ul>
      </FaqsDiv>
    </Layout>
  );
};

export default Faqs;
