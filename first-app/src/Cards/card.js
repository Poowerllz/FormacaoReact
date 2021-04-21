import React, { Component } from "react";
import TrashIMG from '../Assets/Lixeira.svg'
import './card.css'

export default class Card extends Component {
    deletecard(){
        this.props.deletarCard(this.props.indice)
    }

    render(){
        return (
            <section className = "card">
                <header className = "headerCard">
                    <h3>{this.props.titulo}</h3>
                    <img src={TrashIMG} className="TrashIMG" onClick={this.deletecard.bind(this)}></img>
                </header>
                <h4>{this.props.text}</h4>
            </section>
        )
    }
}