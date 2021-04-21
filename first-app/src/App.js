import './App.css';
import ListaDeNotas from './ListaDeNotas/ListaDeNotas'
import React, { Component } from "react";
import Bobs from './Assets/Bobs.svg'


export default class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {}
  }

  writeNote() {
    var titleValue = document.getElementById("titulo").value
    var textValue = document.getElementById("note").value
    var novaNota = { "titleValue": titleValue, "textValue": textValue }
    if (titleValue === "") {
      alert("Opa, Não é possível criar cards vazios.")
    } else {
      this.notas.push(novaNota)
      this.setState({
        notas: this.notas
      })
    }
  }

  deletarCard(index) {
    console.log(index)
    var Arraynotas = this.notas;
    Arraynotas.splice(0, 1)
    this.setState({
      notas: this.Arraynotas
    })
  }

  render() {
    return (
      <div className="App">
        <img src={Bobs} className="Bobs"></img>
        <div className="textArea">
          <h1>Escreva uma nota</h1>

          <section>
            <h3>Categoria</h3>
            <select id="cars" name="cars">
              <option value="Games">Nenhum</option>
              <option value="Games">Volvo</option>
              <option value="Livros">Saab</option>
              <option value="História">Fiat</option>
              <option value="Outros">Audi</option>
            </select>
          </section>

          <section>
            <h3>Título</h3>
            <input type="text" placeholder="Digite seu título" id="titulo"></input>
          </section>


          <section>
            <h3>Sua nota.</h3>
            <input type="text" placeholder="Digite sua nota aqui." id="note"></input>
          </section>

          <button className="button" onClick={this.writeNote.bind(this)} >
            <h4>Submit</h4>
          </button>

          <div className="Redes-Sociais">

          </div>
        </div>
        <u className="Line"></u>
        <div className="Notes">

          <header className="HeaderNotes">
          <div className="Categorias">
            <h2>Categorias</h2>
          <div className="Itens"></div>
          <div className="Change">
          <h5>Criar uma categoria</h5>
          <input type="text" placeholder="Categoria"></input>
          <button>Criar</button>
          </div>
          </div>
          
          <div className="title">
          <h1>Suas notas</h1>
          <h5>Total de notas: {this.notas.length}</h5>
          <u className="anotherLine"></u>
          </div>

          </header>

          <div className="Cards">
            <ListaDeNotas notas={this.notas} deletarCard={this.deletarCard.bind(this)}></ListaDeNotas>
          </div>
        </div>

      </div>
    );
  }

}


