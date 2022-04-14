import React from "react";
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

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  flex-wrap: wrap;
  background: #7869bf;
`;
const Titulo = styled.div`
  display: flex;
  margin-left: 36px;
  color: white;
  font-size: 16px;
  align-items: center;

  span {
    /* font-size: 16px; */
    /* color: #F74202; */
  }
`;

const Nav = styled.div`
  margin-right: 36px;
  button {
    margin: 16px;
    color: #161616;
    font-size: 16px;
    font-weight: 500;
    padding: 2px 16px;
    /* border: #fff; */
    border-radius: 6px;
    /* background: ; */
    width: auto;
    height: 32px;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover {
    background: #7869bf;
    color: white;
  }
`;

export default class ComponenteHeader extends React.Component {
  render() {
    return (
      <Cabecalho>
        <Titulo>
          <ImgLogo src={labetransp} alt="logomarca" />
          <h1>
            Labe
            <span>
              <i>Ninjas</i>
            </span>{" "}
          </h1>
        </Titulo>
        <Nav>
          <button onClick={this.props.goToHome}>Início</button>
        </Nav>
       
      </Cabecalho>
    );
  }
}
