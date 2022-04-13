import React from "react";
import axios from "axios";
import styled from "styled-components";

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
        descricao: ""
      }

    render(){
        
        return (
            <div>
                Eu a página de Detalhes
            </div>
        )
    }
}