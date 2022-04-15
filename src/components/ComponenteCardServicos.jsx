import React from "react";
import styled from "styled-components";
import { BsFillCartCheckFill } from "react-icons/bs";


const CardContainer = styled.div`
  margin: auto;
  margin-top: 24px;
  width: 300px;
  height: 200px;
  border: 1px solid #dfdbf0;
  border-radius: 6px;
  background: #dfdbf0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
`;
const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;
  height: 200px;
`;
const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-around;
  gap: 36px;
  color: black;
  margin-top: 12px;
`;
const Botoes = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 20px;

  button {
    border-radius: 6px;
    border: none;
    background-color: #dfdbf0;
    font-size: 16px;
    padding: 0 8px;
    transition: all 0.3s;
    cursor: pointer;
  }

  button:hover {
    background: white;
    color: #7869bf;
  }
`;

let iconStyles = { color: "#7869bf", fontSize: "2em", cursor: "pointer" };

export default class ComponentCardServicos extends React.Component {
  render() {
    return (
      <CardContainer>
        <InfoCard>
          <Infos>
            <h3>{this.props.titulo}</h3>
            <p>
              Até <span>{this.props.prazo}</span> por{" "}
              <span>R${this.props.preco}</span>
            </p>
            <br />
          </Infos>
          <Botoes>
            <button
              onClick={() => this.props.goToDetalhes(this.props.id)}
              idCard={this.props.idCard}
            >
              Ver Detalhes
            </button>
            <BsFillCartCheckFill
              style={iconStyles}
              onClick={() => this.props.adicionaItemCarrinho(this.props.id)}
              idCard={this.props.idCard}
            />
          </Botoes>
        </InfoCard>
      </CardContainer>
    );
  }
}
