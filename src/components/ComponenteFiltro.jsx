import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerBusca = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  input {
    width: 350px;
    height: 30px;
    padding-left: 10px;
    border-radius: 3px;
    font-style: italic;
    font-size: 16px;
    border: 1px solid grey;
  }
`;
const ContainerFiltrosfilho = styled.div`
  display: flex;
  justify-content: center;

  input.minmax {
    margin-right: 10px;
    width: 100px;
    height: 20px;
    font-size: 16px;
    font-style: italic;
    border-radius: 3px;
    padding-left: 10px;
    border: 1px solid grey;
  }
  select {
    border-radius: 3px;
    padding-left: 10px;
    border: 1px solid grey;
    font-size: 16px;
  }
`;

export default class ComponenteFiltro extends React.Component {
  render() {
    return (
      <ContainerFiltros>
        <ContainerBusca>
          <input
            type="text"
            placeholder="O que você precisa?"
            value={this.props.inputBusca}
            onChange={this.props.onChangeBusca}
          />
        </ContainerBusca>

        <ContainerFiltrosfilho>
          <input
            type="number"
            className="minmax"
            placeholder="Valor Mín."
            value={this.props.inputValorMin}
            onChange={this.props.onChangeValorMin}
          />

          <input
            type="number"
            className="minmax"
            placeholder="Valor Máx."
            value={this.props.inputValorMax}
            onChange={this.props.onChangeValorMax}
          />
          <select
            name="Filtro"
            onChange={this.props.onChangeSelect}
            value={this.props.select}
            className="select"
          >
            <option value="prazo">Prazo</option>
            <option value="titulo">Titulo</option>
            <option value={1}>Preço Crescente</option>
            <option value={-1}>Preço Decrescente</option>
          </select>
        </ContainerFiltrosfilho>
      </ContainerFiltros>
    );
  }
}
