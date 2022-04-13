import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BsFillCartCheckFill } from "react-icons/bs";

const headers = {
	headers: {
	  Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
	},
  };

  const CardContainer = styled.div`
  margin: auto;
  margin-top: 24px;
  width: 300px;
  height: 200px;
  border: 1px solid #dfdbf0;
  border-radius: 6px;
  background: #dfdbf0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;
`
const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`
const Botoes = styled.div`
  display: flex;
  gap: 100px;

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
  
`
let iconStyles = { color: "#7869bf", fontSize: "2em", cursor: "pointer" };


export default class ComponentCardServicos extends React.Component{
  state = {
    titulo:"",
    prazo:"",
    preco: 0,
  }

  
componentDidMount(){
  this.getAllJobsById()
}
getAllJobsById = () => {
  const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`
  axios
  .get(url,headers)
  .then((res)=>{
    this.setState({titulo:res.data.title})
    this.setState({prazo:res.data.dueDate})
    this.setState({preco:res.data.price})
     
  })
  .catch((err)=>{
      console.log(err)
  })
}
  
  render() {
    return (
      <CardContainer>
        <InfoCard>
          <Infos>
            <h3>{this.state.titulo}</h3>
            <p>Até <span>{this.state.prazo}</span> por <span>R${this.state.preco}</span></p>
            <br/>
          </Infos>
          <Botoes>
            <button>Ver Detalhes</button>
            <BsFillCartCheckFill style={iconStyles} onClick={()=> this.props.adicionaItemCarrinho(this.props.id)}/>
          </Botoes>
        </InfoCard>
      </CardContainer>
    )
  }
  }