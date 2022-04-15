import React from "react";
import axios from "axios";
import styled from "styled-components";


const headers = {
  headers: {
    Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
  },
};

const Container = styled.div `
  font-size: 14px;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  height: 76vh;
  border: 3px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 25px 0 rgba(0, 0, 0, 0.19);
  `

const Input = styled.input`
  font-size: 16px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  margin: 12px;
  `
  const Select = styled.select`
  margin: 12px;
  font-size: 16px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
   `
  const Button = styled.button`
  font-size: 18px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 8px 24px;
  font-weight: bold;
  margin-top: 48px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    /* background: #7869bf; */
    background: #7869bf;
    color: white;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
  }

  `
  export default class CadastroServicos extends React.Component {
    state={
        titulo:"",
        descricao:"",
        preco:"",
        formasPagamento:[],
        prazo:""
    }
     
     cadastrarServico=()=>{
        
        const url="https://labeninjas.herokuapp.com/jobs"
        const body={
            "title": this.state.titulo,
            "description": this.state.descricao,
            "price": Number(this.state.preco),
            "paymentMethods":this.state.formasPagamento,
            "dueDate":this.state.prazo,
        }
        
        axios
        .post(url,body,headers)
        
        .then((res) => {
            console.log(res)
            alert ("Serviço  incluído. Sucesso!")
           this.setState({titulo:""})
           this.setState({descricao:""})
           this.setState({preco:""})
           this.setState({prazo:""})
           this.setState({formasPagamento:[]})
           })
        
          .catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message);
            this.setState({titulo:""})
            this.setState({descricao:""})
            this.setState({preco:""})
            this.setState({prazo:""})
            });
                   
    }

    onChangeTitulo=(ev)=>{
this.setState({titulo:ev.target.value})
    }

    onChangeDescricao=(ev)=>{
  this.setState({descricao:ev.target.value})
    }
  onChangePreco=(ev)=>{
    this.setState({preco:ev.target.value})
  }
    onChangeFormasPagamentos=(ev)=>{
      this.setState({formasPagamento:ev.target.value})
    }
      onChangePrazo=(ev)=>{
        this.setState({prazo:ev.target.value})
      }
    
      formaPagamento=(e)=>{ 
        let value=Array.from(e.target.selectedOptions,option=>option.value)
        this.setState({formasPagamento:value})
      }

    render() {

        return (
            <Container>
             <h2>Cadastre seu Serviço</h2>

                <Input type="texto"
                size="50" placeholder="Título" value={this.state.titulo}  onChange={this.onChangeTitulo}
                />
<p></p>
               <Input type="texto"
                size="50"  placeholder="Descrição" value={this.state.descricao}  onChange={this.onChangeDescricao}
                />
<p></p>
               <Input type="number"
                size="50" placeholder="Preço" value={this.state.preco} onChange={this.onChangePreco}
                /><p></p>
           <Select multiple value={this.state.formasPagamento} onChange={this.formaPagamento} > 
            <option type="checkbox">Cartão de Crédito</option>
            <option >Cartão de Débito</option>
            <option >PayPal</option>
            <option >Boleto</option>
            <option >Bitcoin</option>
            <option >PIX</option> 
            </Select>            <p></p>
             <Input type="date"
               placeholder="dd-mm-aaaa" value={this.state.prazo} onChange={this.onChangePrazo}
                />              <p></p>
                <Button onClick={this.cadastrarServico}>Cadastrar Serviço</Button>                </Container>
        )
    }
  }
  
        
