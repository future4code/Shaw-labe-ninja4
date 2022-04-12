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
  `

    const Input = styled.input`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;

  `
  const Select = styled.select`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  

  `
  const Button = styled.button`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;

  `
  export default class CadastroServicos extends React.Component {
    state={
        titulo:"",
        descricao:"",
        preco:"",
        formasPagamento:[],
        prazo:""
    }
     
    
     
    inputTitulo= (event)=>{
        this.setState({titulo:event.target.value})
    }

    inputDescricao= (event)=>{
        this.setState({descricao:event.target.value})
    }

    inputPreco= (event)=>{
        this.setState({preco:event.target.value})
    }
    inputFormasPagamento= (event)=>{
        this.setState({formasPagamento:event.target.value})
    }
    inputPrazo= (event)=>{

        this.setState({prazo:event.target.value})
        // prazo=prazo.toISOString()
    }

 
    cadastrarServico=()=>{
        
        const url="https://labeninjas.herokuapp.com/jobs"
        const body={
            "title": this.state.inputTitulo,
            "description": this.state.inputDescricao,
            "price": this.state.inputPreco,
            "paymentMethods":this.state.inputFormasPagamento,
            "dueDate":this.state.inputPrazo,
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
           })
        
          .catch((err) => {
            console.log("titulo==" ,this.state.titulo)
            console.log("descr==" ,this.state.descricao)
            console.log("preco==" ,this.state.preco)
            console.log("formapagto==" ,this.state.formasPagamento)
            console.log("prazo==" ,this.state.prazo)
            

           console.log(err.response.data.message)
            alert(err.response.data.message);
            this.setState({titulo:""})
            this.setState({descricao:""})
            this.setState({preco:""})
            this.setState({prazo:""})
            });

    }

    render() {

        return (
            <Container>
             <h2>Cadastre seu Serviço:</h2>

                <Input type="texto"
                size="50"
                placeholder="Título"
                value={this.state.titulo}
                onChange={this.inputTitulo}
                />
<p></p>
               <Input type="texto"
                size="50"
                placeholder="Descrição"
                value={this.state.descricao}
                onChange={this.inputDescricao}
                />
<p></p>
               <Input type="number"
                size="50"
                placeholder="Preço"
                value={this.state.preco}
                onChange={this.inputPreco}
                />

<p></p>

               
            <Select value={this.state.formasPagamento} onChange={this.inputFormasPagamento} > 
            <option value="Cartao de CRedito">Cartão de Crédito</option>
            <option value="Cartao de Debito">Cartão de Débito</option>
            <option value="Pay Pal">PayPal</option>
            <option value="Boleto">Boleto</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Pix">PIX</option> 
            </Select>

            <p></p>
           


                <Input type="date"
                          
                placeholder="dd-mm-aaaa"
                value={this.state.prazo}
                onChange={this.inputPrazo}
                />

<p></p>

                <Button onClick={this.cadastrarServico}>Cadastrar Serviço</Button>

                </Container>
        )
    }
  }
        
