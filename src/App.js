import React from "react";
import { AppContainer } from "./components/AppContainer";
import styled from "styled-components";
import axios from "axios";
import Home from "./pages/Home";
import CadastroServicos from "./pages/CadastroServicos";
import PageCarrinho from "./pages/PageCarrinho";
import PageMostrarServicos from "./pages/PageMostrarServicos";
import Footer from "./components/Footer";
import ComponenteHeader from "./components/ComponenteHeader";

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

export default class App extends React.Component {
  state = {
    telaAtual: "home",
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return <Home />;
      case "cadastro":
        return <CadastroServicos />;
      case "carrinho":
        return <PageCarrinho />;
      case "servicos":
        return <PageMostrarServicos />;
      default:
        return <Home />;
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.mudaTela("home")}>Home</button>
		  <button onClick={() => this.mudaTela("carrinho")}>
            Carrinho
          </button>
		  <button onClick={() => this.mudaTela("cadastro")}>
            Quero ser um Ninja
          </button>
         
          <button onClick={() => this.mudaTela("servicos")}>Contratar um Ninja</button>
          <>{this.escolherTela()}</>
        </div>
      </>
    );
  }
}
