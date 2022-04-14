import React from "react";
import axios from "axios";
import styled from "styled-components";
import labeninjas from "../assets/labeninjas.png";
import labetransp from "../assets/labetransp.png";
import fundoHome from "../assets/fundoHome.png";
import Footer from "../components/Footer";

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

/* //const Button = styled.button`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  margin: 1%;
  font-weight: bold;

`; */

/* const ContainerBotoes = styled.div`
  display: flex;
  margin: 1%;
`; */

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #000;
  background-image: url(${fundoHome});
  background-size: cover;
  height: 100vh;
`;

const Nav = styled.div`
  button {
    position: relative;
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

export default class Home extends React.Component {
  render() {
    return (
      <>
        <HomeStyle>
          <Nav>
            <button onClick={this.props.goToCadastroServicos}>
              Quero ser um Ninja
            </button>
            <button onClick={this.props.goToMostrarServicos}>
              Contratar um Ninja
            </button>
          </Nav>
        </HomeStyle>
      </>
    );
  }
}
