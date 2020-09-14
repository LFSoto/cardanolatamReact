import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const TlgmNotif = () => {
  const MsgContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #40c1d5;
    color: #00162b;
    padding: 4px;
    transition: 400ms;
  `;

  const Content = styled.div`
    margin-left: 98%;
    position: absolute;
  `;

  const Message = styled.p`
    color: #00162b;
    font-size: 30px;
    text-align: center;
  `;

  const Close = styled.button`
    background-color: #40c1d5;
    border: 0;
  `;

  const CloseLogo = styled(RiCloseCircleLine)`
    height: 30px;
    width: 30px;
  `;

  const ButtonContainer = styled.a`
    margin-left: 50%;
    padding-top: 50px;
  `;

  const Telegram = styled(FaTelegram)`
    height: 50px;
    width: 50px;
    color: #00162b;
  `;

  const Bottom = styled.div`
    margin-left: 90%;
  `;

  const [mensaje, setMensaje] = useState(true);
  const [t, i18n] = useTranslation("global");

  return mensaje ? (
    <MsgContainer className="contenedorMsj">
      <Content>
        <Close
          onClick={(e) => {
            setMensaje(false);
            setTimeout(1000);
            localStorage.setItem("localOption", mensaje);
          }}
        >
          <CloseLogo />
        </Close>
      </Content>
      <Message>
        <b>{t("tlgrm.tlgrm-msg")}</b>
      </Message>
      <ButtonContainer
        href="https://t.me/joinchat/NFPHBAvdIx162AoNnibCXg"
        className="logo"
        target="popup"
      >
        <Telegram />
      </ButtonContainer>

      <Bottom />
    </MsgContainer>
  ) : null;
};

export default TlgmNotif;
