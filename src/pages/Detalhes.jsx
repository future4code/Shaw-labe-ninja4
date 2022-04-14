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
            <div>
              <h2>{this.state.titulo}</h2>
              <p>Descrição: {this.state.descricao}</p>
              <p>Prazo: {this.state.prazo}</p>
              <p>Preço: {this.state.preco}</p>
              <p>Método de Pagamento: {this.state.metodoPagamento}</p>

            </div>
        )
    }
}