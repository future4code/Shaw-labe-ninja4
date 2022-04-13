import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

const ConjuntoDeItens = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  
`;

export default class ItensCarrinho extends React.Component {
  render() {
    return (
      <ConjuntoDeItens>
        <p>Title: {this.props.title}</p>
        <p>Description: {this.props.description}</p>
        <p>Price: {this.props.price}</p>
        <p>Payment Method: {this.props.paymentMethods}</p>
        <p>Due date: {this.props.dueDate}</p>
        
        <button onClick={this.props.onClick}>Remover</button>
      </ConjuntoDeItens>
    );
  }
}
