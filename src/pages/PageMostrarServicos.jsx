import React from "react";
import axios from "axios";
import styled from "styled-components";
import ComponenteFiltro from '../components/ComponenteFiltro'

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};



export default class PageMostrarServicos extends React.Component {
  state = {
    inputBusca: '',
    inputValorMin: "",
    inputValorMax: "",

  }
  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value })
  }
  onChangeValorMin = (event) => {
    this.setState({ inputValorMin: event.target.value })
  }
  onChangeValorMax = (event) => {
    this.setState({ inputValorMax: event.target.value })
  }

  render() {
    return (
      <>
       
        <ComponenteFiltro

          inputBusca={this.state.inputBusca}
          onChangeBusca={this.onChangeBusca}
          inputValorMin={this.state.inputValorMin}
          onChangeValorMin={this.onChangeValorMin}
          inputValorMax={this.state.inputValorMax}
          onChangeValorMax={this.onChangeValorMax}


        />
        <h1>LabeNinjas</h1>
        <h2>O talento certo no momento certo</h2>
        <>SOU A PÁGINA DE CONTRATAR SERVIÇOS</>
      </>
    );
  }
}
