import React from "react";
import Home from "./pages/Home";
import CadastroServicos from "./pages/CadastroServicos";
import PageCarrinho from "./pages/PageCarrinho";
import PageMostrarServicos from "./pages/PageMostrarServicos";
import Footer from "./components/Footer";
import ComponenteHeader from "./components/ComponenteHeader";
import ComponenteCarrinho from "./components/ComponenteCarrinho";
import Detalhes from "./pages/Detalhes";
import ComponentCardServicos from "./components/ComponenteCardServicos";
const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

export default class App extends React.Component {
  state = {
    telaAtual: "home",
    idCard: "",
  };

  goToCadastroServicos = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  goToMostrarServicos = (id) => {
    this.setState({ telaAtual: "servicos", idCard: id });
  };

  goToDetalhes = (id) => {
    this.setState({ telaAtual: "detalhes", idCard: id });
  };

  goToHome = () => {
    this.setState({ telaAtual: "home" });
  };

  goToCarrinho = () => {
    this.setState({ telaAtual: "carrinho" });
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return (
          <Home
            goToCadastroServicos={this.goToCadastroServicos}
            goToMostrarServicos={this.goToMostrarServicos}
            goToHome={this.goToHome}
            goToCarrinho={this.goToCarrinho}
          />
        );
      case "cadastro":
        return <CadastroServicos />;
      case "carrinho":
        return (
          <PageCarrinho
            goToHome={this.goToHome}
            goToCarrinho={this.goToCarrinho}
            dadosCards={this.state.carrinho}
            valorTotal={this.state.valorTotal}
            removerItemDoCarrinho={this.removerItemDoCarrinho}
          />
        );
      case "servicos":
        return (
          <PageMostrarServicos
            goToDetalhes={this.goToDetalhes}
            idCard={this.state.idCard}
          />
        );
      case "detalhes":
        return (
          <Detalhes
            goToHome={this.goToHome}
            goToCarrinho={this.goToCarrinho}
            goToDetalhes={this.goToDetalhes}
            idCard={this.state.idCard}
          />
        );
      default:
        return <Home />;
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    console.log("idCard dentro do app", this.state.idCard);
    return (
      <>
        <header>
          <ComponenteHeader
            goToCadastroServicos={this.goToCadastroServicos}
            goToMostrarServicos={this.goToMostrarServicos}
            goToHome={this.goToHome}
            goToCarrinho={this.goToCarrinho}
          />
        </header>

        <main>
          <div>
            <>{this.escolherTela()}</>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}
