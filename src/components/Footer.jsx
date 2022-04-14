import React from "react";
import axios from "axios";
import styled from "styled-components";
import labetransp from "../assets/labetransp.png";

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

const ImgLogo = styled.img`
  height: 12vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const FootStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2%;
  height: 5vh;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <FootStyle>
        <ImgLogo src={labetransp} alt="logomarca" />
        <h4>Avenida de Pruneridge, 19111 Cupertino, CA 95014</h4>
        </FootStyle>
      </>
    );
  }
}
