import React from "react";
import axios from "axios";
import styled from "styled-components";
import ComponenteFiltro from "../components/ComponenteFiltro";
import ComponentCardServicos from "../components/ComponenteCardServicos";
import { BsFillCartCheckFill } from "react-icons/bs";
import ComponenteCarrinho from "../components/ComponenteCarrinho";
import labeninjas from '../assets/labeninjas.png'
import labetransp from '../assets/labetransp.png'

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: space-evenly;
  padding: 1%;
  
`

const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

const JobECarrinho = styled.div`
  display: flex;

`

export default class PageMostrarServicos extends React.Component {
  state = {
    inputBusca: "",
    inputValorMin: "",
    inputValorMax: "",
    select: "prazo",
    dadosCards: [],
    valorTotal: 0,
    carrinho: [],
  };

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ dadosCards: res.data.jobs });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  componentDidMount() {
    this.getAllJobs();
  }

  onChangeSelect = (e) => {
    console.log(e.target.value);
    this.setState({ select: e.target.value });
  };

  onChangeBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
  };
  onChangeValorMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };
  onChangeValorMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  adicionaItemCarrinho = (id) => {
    const addItem = this.state.dadosCards.find((item) => id === item.id);
    const novoItemCarrinho = [...this.state.carrinho, addItem];
    this.setState({ carrinho: novoItemCarrinho });
  };

  removerItemDoCarrinho = (id) => {
    const NovoCard = this.state.carrinho
      .map((item)=>{
        if (id === item.id){
          return{
            ...item,
            quantidade: item.quantidade -1 
          }
        }
        return item 
      })
      .filter((item)=> item.quantidade > 0)
    this.setState({ carrinho: NovoCard})
    alert("Removeu");
  };

  render() {
    const copiaDadosCards = [...this.state.dadosCards]
      .filter((dado) => {
        return (
          this.state.inputValorMin === "" ||
          dado.price >= this.state.inputValorMin
        );
      })
      .filter((dado) => {
        return (
          this.state.inputValorMax === "" ||
          dado.price <= this.state.inputValorMax
        );
      })
      .filter((dado) => {
        return dado.title
          .toLowerCase()
          .includes(this.state.inputBusca.toLowerCase());
      });
    //
    copiaDadosCards.sort((primeiroJob, segundoJob) => {
      switch (this.state.select) {
        case "titulo":
          return primeiroJob.title.localeCompare(segundoJob.title);
        case "prazo":
          return (
            new Date(primeiroJob.dueDate) -
            new Date(segundoJob.dueDate).getTime()
          );
        default:
          return this.state.select * (primeiroJob.price - segundoJob.price);
      }
    });

    //-------- map ára reederizar na tela

    const mapeandoJobs = copiaDadosCards.map((dado) => {
      return (
        <ComponentCardServicos
          titulo={dado.title}
          preco = {dado.price}
          prazo={dado.dueDate}
          descricao={dado.description}
          metodoPagamento={dado.paymentMethods}
          key={dado.id}
          id={dado.id}
          adicionaItemCarrinho={this.adicionaItemCarrinho}

          goToDetalhes = {this.props.goToDetalhes}
      //   idCard = {dado.id}
        />
      );
    });




    console.log(this.state.carrinho);

    return (
      <>
      <H2>O talento certo no momento certo</H2>
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
        
        
       

        <JobECarrinho>
          <Card>{mapeandoJobs}</Card>

          <ComponenteCarrinho
            dadosCards={this.state.carrinho}
            valorTotal={this.state.valorTotal}
            removerItemDoCarrinho={this.removerItemDoCarrinho}
          />
        </JobECarrinho>
      </>
    );
  }
}
