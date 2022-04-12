import React from "react";
import axios from "axios";
import styled from 'styled-components';

const headers = {
    headers: {
        Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
    },
};


export default class ComponenteFiltro extends React.Component {

       

    render() {
        return (
            <>
               <input 
               type="text" 
               placeholder="Busca"
               value={this.props.inputBusca} 
               onChange={this.props.onChangeBusca}
               />
                  <select name="" id=""> 
                  <option>Prazo</option>
                  <option>Titulo</option>
                  <option>Preço Crescente</option>
                  <option>Preço Decrescente</option>
                  </select>
                
               
                    <input type="number"
                    placeholder="Valor Min."
                    value={this.props.inputValorMin} 
                    onChange={this.props.onChangeValorMin}
                    />

               
                    <input type="number"
                    placeholder="Valor Max."
                    value={this.props.inputValorMax}
                    onChange={this.props.onChangeValorMax}

                    />
                <>OIS</>

            </>
        )
    }


}