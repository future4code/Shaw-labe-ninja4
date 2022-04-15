import React from "react";
import axios from "axios";
import styled from "styled-components";

import ComponentCardServicos from "../components/ComponenteCardServicos";


import labeninjas from '../assets/labeninjas.png'
import labetransp from '../assets/labetransp.png'

const headers = {
	headers: {
	  Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
	},
  };

  const ContainerDetalhes = styled.div`
    height: 76vh;
    display: flex;
    align-items: center;
  `

  const Details = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid black;
    width: 400px;
    height: 400px;
    font-size: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    h2{
      /* margin-top: 12px; */
    }
  `

  
export default class Detalhes extends React.Component {
  state = {
    titulo:"",
    prazo:"",
    preco: 0,
    idServico: "",
    descricao: "",
    metodoPagamento:""
  }

  
componentDidMount(){
  this.getAllJobsById()
}
getAllJobsById = () => {
  const url = `https://labeninjas.herokuapp.com/jobs/${this.props.idCard}`
  axios
  .get(url,headers)
  .then((res)=>{
    this.setState({titulo:res.data.title})
    this.setState({prazo:res.data.dueDate})
    this.setState({preco:res.data.price})
    this.setState({idServico:res.data.id})
    this.setState({descricao:res.data.description})
    this.setState({metodoPagamento:res.data.paymentMethods})

    
     
  })
  .catch((err)=>{
      console.log(err)
  })
}
    render(){
        return (
            <ContainerDetalhes>
              <Details>
                <h2>{this.state.titulo}</h2>
                <p><strong>Descrição: </strong>{this.state.descricao}</p>
                <p><strong>Prazo: </strong>{this.state.prazo}</p>
                <p><strong>Preço: </strong>R$ {this.state.preco}</p>
                <p><strong>Método de Pagamento: </strong>{this.state.metodoPagamento}</p>
              </Details>
            </ContainerDetalhes>
        )
    }
}