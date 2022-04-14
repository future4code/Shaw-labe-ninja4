import React from "react";
import axios from "axios";
import styled from "styled-components";
import ItensCarrinho from "./ItensCarrinho";

const Carrinho = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  border: 1px solid #dfdbf0;
  border-radius: 6px;
  padding: 10px;
  background-color: #fff;
  background: #dfdbf0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 1%;
`;


const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

export default class ComponenteCarrinho extends React.Component {
  render() {
    const itensAddAoCarrinho = this.props.dadosCards && this.props.dadosCards.map((item) => {
      return (
        
        <ItensCarrinho
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          paymentMethods={item.paymentMethods}
          dueDate={item.dueDate}
          onClick={() => this.props.removerItemDoCarrinho(item)}
        />
        
      );
    });
    console.log(this.props.dadosCards);
    return (
      <>
        <Carrinho>
          <h2>Carrinho:</h2>
          <div>{itensAddAoCarrinho}</div>
          

          <p>Valor Total: R$ {this.props.valorTotal},00</p>
        </Carrinho>
      </>
    );
  }
}
