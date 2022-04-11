import React from "react";
import axios from "axios";
import styled from"styled-components";

const headers = {
	headers: {
	  Authorization: "34cb6ce8-5c1e-4c13-8f08-adc127e1cd24",
	},
  };


export default class Home extends React.Component{

    render(){
        return(
            <>
            
            <div>
            <h1>LabeNinjas</h1>
            <h2>O talento certo no momento certo</h2>
            <button>Quero ser um Ninja</button>
            <button>Contratar um Ninja</button>
            </div> 
            
            </>
        )
    }
        

}