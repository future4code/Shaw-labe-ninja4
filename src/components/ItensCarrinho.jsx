import React from "react";
import styled from "styled-components";

const ConjuntoDeItens = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 1%;
  border: 1px solid #dfdbf0;
  border-radius: 10px;
  background-color: white;
  background: #dfdbf0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Button = styled.button`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
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

        <Button
          onClick={() => this.props.removerItemDoCarrinho(this.props.idCard)}
        >
          Remover
        </Button>
      </ConjuntoDeItens>
    );
  }
}
