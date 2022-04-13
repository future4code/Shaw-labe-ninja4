import React from "react";
import axios from "axios";
import styled from "styled-components";
import ComponenteFiltro from '../components/ComponenteFiltro'
import ComponentCardServicos from "../components/ComponenteCardServicos";
import { BsFillCartCheckFill } from "react-icons/bs";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`


const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};



export default class PageMostrarServicos extends React.Component {
  state = {
    inputBusca: '',
    inputValorMin: "",
    inputValorMax: "",

    select:"prazo",

    dadosCards: []



  }
 
getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios
    .get(url,headers)
    .then((res)=>{
      this.setState({dadosCards:res.data.jobs})
      console.log(res.data.jobs)
       
    })
    .catch((err)=>{
        console.log(err)
    })
}

getAllJobsById = () => {
  const url = `https://labeninjas.herokuapp.com/jobs/${this.state.dadosCards[0].id}`
  console.log(this.state.dadosCards[0].id)
  axios
  .get(url,headers)
  .then((res)=>{
    console.log(res.data.jobs)
     
  })
  .catch((err)=>{
      console.log(err)
  })
}

componentDidMount(){
    this.getAllJobs()
    
}

onChangeSelect=(e)=>{
    console.log(e.target.value)
    this.setState({select: e.target.value})
}
  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value })
  }
  onChangeValorMin = (event) => {
    this.setState({ inputValorMin: event.target.value })
  }
  onChangeValorMax = (event) => {
    this.setState({ inputValorMax: event.target.value })
  }

  render() {
    const mapeandoJobs = this.state.dadosCards.map((dado)=>{
      return (
        <ComponentCardServicos key={dado.id} id = {dado.id}></ComponentCardServicos>
      )
    })

    return (
      <>
       
        <ComponenteFiltro

          inputBusca={this.state.inputBusca}
          onChangeBusca={this.onChangeBusca}
          inputValorMin={this.state.inputValorMin}
          onChangeValorMin={this.onChangeValorMin}
          inputValorMax={this.state.inputValorMax}
          onChangeValorMax={this.onChangeValorMax}

          select={this.state.select}
          onChangeSelect={this.onChangeSelect}


        />
        <h1>LabeNinjas</h1>
        <h2>O talento certo no momento certo</h2>
        <>SOU A PÁGINA DE CONTRATAR SERVIÇOS</>
        <Card>
        {mapeandoJobs}
        </Card>
        </>

        
    );
  }
}
