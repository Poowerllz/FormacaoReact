import React, { Component } from "react";
import Card from '../Cards/card.js'
import './ListaDeNotas.css'

export default class ListaDeNotas extends Component{
    render(){
        return(
            <ul className="Cards">
                {this.props.notas.map((nota, index) => {
                    index += 1;
                    return(
                        <Card titulo={nota.titleValue} text={nota.textValue} indice={index} deletarCard={this.props.deletarCard}/>
                    )
                })}
            </ul>
        )
    }
}