import React from "react";
import styled from "styled-components";
import labetransp from "../assets/labetransp.png";

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

const DescriçãoFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  background-color: #9387cc;
  color: white;
  justify-content: center;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <FootStyle>
          <ImgLogo src={labetransp} alt="logomarca" />
          <DescriçãoFooter>
            <h4>Avenida de Pruneridge, 19111 Cupertino, CA 95014</h4>
            <h5>
              By Pablo Gomes, Sérvulo Silva, Silvia Cristiana, Rodrigo Vieira,
              Will ©
            </h5>
          </DescriçãoFooter>
        </FootStyle>
      </>
    );
  }
}
