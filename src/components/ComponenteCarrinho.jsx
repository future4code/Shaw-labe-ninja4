import React from "react";
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

export default class ComponenteCarrinho extends React.Component {
  valorTotal = () => {
    const valorTotal = this.props.dadosCards.map((job) => {
        return job.price
    }).reduce((a, b) => a + b, 0)
        return(valorTotal)
  }

  render() {
    const itensAddAoCarrinho =
      this.props.dadosCards &&
      this.props.dadosCards.map((item, index) => {
        return (
          <ItensCarrinho
            key={index}
            idCard={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            paymentMethods={item.paymentMethods}
            dueDate={item.dueDate}
            removerItemDoCarrinho={this.props.removerItemDoCarrinho}
          />
        );
      });

    return (
      <>
        <Carrinho>
          <h2>Carrinho:</h2>
          <div>{itensAddAoCarrinho}</div>

          <p>Valor Total: R$ {this.valorTotal()},00</p>
        </Carrinho>
      </>
    );
  }
}
